import _ from "lodash";
import ProductTile from "../../components/ProductTile/ProductTile";
import ExtractParameter from "../../helpers/LinkParameterExtract";
function GetSpecs(specs) {
  //exctract keywords from the specs of a product in the form of an array
  return specs
    .map((item) => {
      return item?.name.toUpperCase() === "YES"
        ? item.content.toUpperCase().split(" ")
        : item.content.toUpperCase().split(" ");
    })
    .flat();
}

function isReleventToSearch(product, search, categories) {
  let prodArray = Array.from(product);
  let searchArray = Array.from(search);
  //cheking for every String in searchArray if its in prodArray and vise versa, consider plural and singular cases then put the number of matches in a variable value
  let value = 0;
  for (let i = 0; i < searchArray.length; i++) {
    for (let j = 0; j < prodArray.length; j++) {
      if (searchArray[i] === prodArray[j]) {
        value++;
      }
    }
  }
  for (let i = 0; i < searchArray.length; i++) {
    for (let j = 0; j < prodArray.length; j++) {
      if (
        searchArray[i] === prodArray[j] + "S" ||
        prodArray[j] === searchArray[i] + "S"
      ) {
        value++;
      } else if (
        searchArray[i] === prodArray[j] + "ES" ||
        prodArray[j] === searchArray[i] + "ES"
      ) {
        value++;
      }
    }
  }
  return value / search.size > 0.66 ? true : false;
}

function testProduct(product) {
  //getting keyWords from both category filter and search filter
  let filterKeyWords =
    ExtractParameter("category") + " " + ExtractParameter("search");
  if (filterKeyWords !== 0) {
    filterKeyWords = new Set(
      _.without(filterKeyWords.toUpperCase().split(" "), "NULL", "NO")
    );
  }
  // ketting keywords related to the product
  let ProductsKeyWords = new Set(
    _.without(
      product?.name
        ?.toUpperCase()
        .split(" ")
        .concat(product.category.name.toUpperCase())
        .concat(GetSpecs(product?.specs)),
      "NO"
    )
  );
  console.log(ProductsKeyWords);
  /*
  ProductsKeyWords is a Set, delete all elements that are Substrings of other elements in ProductsKeyWords, if we have "camera" and "camera lens", we want to delete "camera lens"
  */
  ProductsKeyWords.forEach((element) => {
    ProductsKeyWords.forEach((element2) => {
      if (element2.includes(element) && element !== element2) {
        ProductsKeyWords.delete(element2);
      }
    });
  });

  return ExtractParameter("category") + ExtractParameter("search") !== 0
    ? isReleventToSearch(ProductsKeyWords, filterKeyWords)
    : true;
}

function renderProducts(products, accentColor, contrastColor) {
  return products
    ?.filter((prod) => {
      return testProduct(prod);
    })
    .map((prod) => (
      <ProductTile
        key={prod.id}
        data={prod}
        accentColor={accentColor}
        contrastColor={contrastColor}></ProductTile>
    ));
}

// function renderProducts(produts) {
//   let category = ExtractParameter("category");
//   let search = ExtractParameter("search").split(" ");
//   let ProductsKeyWords = products.map((product) => {
//     let keywords = product.name.split(" ");
//   });
//   if (category !== null)
//     return props.state?.products
//       ?.filter((prod) => {
//         return prod?.category?.toUpperCase() === category?.toUpperCase()
//           ? true
//           : false;
//       })
//       .map((prod) => {
//         checkIfSpecsInSearch(prod.specs, search);
//         return (
//           <ProductTile
//             key={prod.id}
//             data={prod}
//             accentColor={props.state?.accentColor}
//             contrastColor={props.state?.contrastColor}></ProductTile>
//         );
//       });
//   if (search !== null)
//     return props.state?.products
//       ?.filter((prod) => {
//         return prod?.name?.toUpperCase().includes(search?.toUpperCase()) ||
//           prod?.category?.toUpperCase().includes(search?.toUpperCase()) ||
//           search?.toUpperCase().toUpperCase().includes(prod?.name) ||
//           search?.toUpperCase().toUpperCase().includes(prod?.category) ||
//           checkIfSpecsInSearch(prod.specs, search)
//           ? true
//           : false;
//       })
//       .map((prod) => {
//         return (
//           <ProductTile
//             key={prod.id}
//             data={prod}
//             accentColor={props.state?.accentColor}
//             contrastColor={props.state?.contrastColor}></ProductTile>
//         );
//       });
//   if (search === null && category === null) {
//     return props.state?.products?.map((prod) => {
//       checkIfSpecsInSearch(prod.specs, search);
//       return (
//         <ProductTile
//           key={prod.id}
//           data={prod}
//           accentColor={props.state?.accentColor}
//           contrastColor={props.state?.contrastColor}></ProductTile>
//       );
//     });
//   }
// }

export { testProduct, renderProducts };
