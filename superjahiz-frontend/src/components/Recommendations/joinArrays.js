export default function joinArrays(products, pictures) {
    // Create a map to keep track of pictures associated with product_id
    let productPictures = new Map();
  
    // Iterate through pictures array and add to productPictures map
    pictures.forEach(picture => {
      productPictures.set(picture.id, picture.picture);
    });
  
    // Iterate through products array and add picture attribute
    products.forEach(product => {
      product.picture = productPictures.get(product.product_id);
    });
  
    return products;
  }