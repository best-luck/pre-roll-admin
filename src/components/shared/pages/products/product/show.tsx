import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { ProductType } from "../../../../../lib/types/product";
import Image from "next/image";

interface ProductProps {
  product: ProductType
}

export default function ProductShow(props: ProductProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-black">
        <Image
          src={props.product.image}
          alt=""
          width={100}
          height={150}
          layout="responsive"
          style={{maxHeight: 150}}
        />
      </div>
      <div className="p-5 bg-gray-100">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
          {props.product.description}
        </h5>
        <a
          href="#"
        >
          Shop Now
          <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
