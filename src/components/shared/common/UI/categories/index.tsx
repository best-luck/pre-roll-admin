import Category from "./category";
import { CATEGORIES as categories } from "@src/lib/static/vars";

export default function Categories() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 flex-wrap">
      {
        categories.map(category => <Category key={`category-${category}`} category={category} />)
      }
    </div>
  );
}