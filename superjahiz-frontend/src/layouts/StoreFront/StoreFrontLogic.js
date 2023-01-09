import CategoryTile from "../../components/CategoryTile/CategoryTile";
import ProductTile from "../../components/ProductTile/ProductTile";

function renderProductsTopSellers(
  categories,
  products,
  accentColor,
  contrastColor
) {
  return products
    ?.map((prod) => {
      return (
        <ProductTile
          key={prod?.id}
          data={prod}
          accentColor={accentColor}
          contrastColor={contrastColor}
          categories={categories}></ProductTile>
      );
    })
    .slice(0, 5);
}
function renderCategories4(categories) {
  var i = 0;
  console.log(categories);
  return categories
    ?.map((cat) => {
      return <CategoryTile key={i++} data={cat} />;
    })
    .slice(0, 4);
}

export { renderProductsTopSellers, renderCategories4 };
