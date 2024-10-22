import { ProductType } from "@src/lib/types/product";
import Product from "../product";
import { SpecialType } from "@src/lib/types/specials";
import Special from "../../specials/special";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";

interface Props {
  products: ProductType[];
  category: string;
  isFetching: boolean;
  special?: SpecialType
  loadMore: () => void;
  noMoreProducts: boolean;
  subCategory: string;
}

export default function List(props: Props) {
  const { isFetching, products, category, special, loadMore, noMoreProducts, subCategory } = props;
  const searchParams = useSearchParams();
  const query = searchParams?.get("search");

  return (
    <div className="flex-1">
      {
        special ? 
          <div>
            <div className="mb-5">
              <Link href="/deals" className="font-bold ml-3"><FontAwesomeIcon icon={faCaretLeft} /> All Specials</Link>
            </div>
            <Special special={special} type="view" />
          </div> : 
          ''
      }
      <h1 className="uppercase text-3xl font-bold border-b border-gray-300 pb-3 w-full mt-5">
        {
          category!=='Specials'?(query?`Showing result for: ${query}`:`All ${subCategory?(subCategory==="all"?"":subCategory.replaceAll("_", " ")):props.category}`):`Items On Special`
        }
      </h1>
      <div className="products-grid-container flex flex-wrap">
        {
          products.map((product, index) => (
            <Product
              display="Listing"
              product={product}
              key={`product-list-${product.slug}-${index}`}
              isFetching={isFetching} />
          ))
        }
      </div>
      {
        !noMoreProducts ? <div className="flex justify-center">
          <button onClick={loadMore} className="bg-black text-white px-5 py-3 rounded-full">Load More</button>
        </div> : ''
      }
    </div>
  );
}