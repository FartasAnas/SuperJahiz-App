export default function addNumberAttribute(data) {
    // Create a map to keep track of product_id count
  let productCount = new Map();
  
  // Iterate through data and add to productCount map
  data.forEach(item => {
    if (productCount.has(item.product_id)) {
      productCount.set(item.product_id, productCount.get(item.product_id) + 1);
    } else {
      productCount.set(item.product_id, 1);
    }
  });
  
  // Remove duplicates and add count attribute
  let uniqueData = data.filter((item, index, self) => {
    // Check for duplicate product_id
    let duplicate = self.findIndex((i) => i.product_id === item.product_id) === index;
    if (duplicate) {
      item.number = productCount.get(item.product_id);
    }
    return duplicate;
  });
  
  return uniqueData;
  }
  