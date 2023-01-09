import CategoryTile from "../../components/CategoryTile/CategoryTile";

function renderCategories(categories) {
  return categories?.map((cat) => {
    return <CategoryTile key={cat.name} data={cat} />;
  });
}
export { renderCategories };
