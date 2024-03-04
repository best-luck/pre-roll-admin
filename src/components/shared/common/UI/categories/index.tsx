import Category from "./category";

const categories = ["shop all", "bulk flower", "pre-pack flower", "pre-rolls", "vapes", "edibles", "extracts", "topicals", "tinctures", "accessories"]

export default function Categories() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 flex-wrap">
      {
        categories.map(category => <Category key={`category-${category}`} category={category} />)
      }
    </div>
  );
}