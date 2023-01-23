import requests
from apyori import apriori
from flask import Flask, request, jsonify
from flask_cors import CORS
url = "http://localhost:8090/userOrder/all"
response = requests.get(url)
data = response.json()

product_ids_list = []
for order in data:
    product_ids = []
    for order_line in order['orderLines']:
        if type(order_line['product']) == dict:
            product_id = order_line['product']['id']
            product_ids.append(product_id)
        else:
            product_id = order_line['product']
            product_ids.append(product_id)
    product_ids_list.append([order['id'], product_ids])

print(product_ids_list)
transactions = [product_ids for _, product_ids in product_ids_list]
app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

def eliminate_doubles(arr):
    # Create an empty list
    unique_values = []
    # Iterate through the array of dictionaries
    for i in range(len(arr)):
        # Check if the product_id value is already in the list
        if arr[i]['product_id'] not in [dic['product_id'] for dic in unique_values]:
            # If it is not, add it to the list
            unique_values.append(arr[i])
    return unique_values

@app.route('/association-rules/<int:product_id>', methods=['GET'])
def association_rules(product_id):
    # Apply the Apriori algorithm on the transactions
    results = list(apriori(transactions, min_support=0.05, min_confidence=0.49))
    # Create an empty list to store the associated product IDs
    associated_products = []
    # Iterate over the rules
    for item in results:
        # Extract the items from the rule
        items = [x for x in item[0]]
        # Extract the support, confidence, and lift values
        support = item[1]
        confidence = item[2][0][2]
        lift = item[2][0][3]
        # Check if the input product ID is in the rule
        if product_id in items:
            # Iterate over the items in the rule
            for item in items:
                # Check if the item is not the input product ID
                if item != product_id:
                    # Add the item to the list of associated products
                    associated_products.append({'product_id': item, 'confidence': confidence, 'support': support})
    # Return the list of associated products
    return jsonify(eliminate_doubles(associated_products))

if __name__ == '__main__':
    app.run(debug=True)