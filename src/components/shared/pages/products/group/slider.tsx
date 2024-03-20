import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductType } from "../../../../../lib/types/product";
import Product from "../product";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import Swiper styles
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";
import "./slider-style.scss";

export default function ProductsSlier({ products, selectProduct }: { products: ProductType[], selectProduct: (p: ProductType) => void; }) {

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  
  return (
    <div className="products-slider relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          700: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {
          products.map((product, index) => (
            <SwiperSlide
              key={`product-slider-${product.id}`}
            >
              <Product
                display="Cart"
                product={product}
                selectProduct={selectProduct} />
            </SwiperSlide>
          ))
        }
        <div ref={navigationPrevRef} className="h-full left-3 top-0 absolute flex items-center z-10 navigation-container">
          <div className="drop-shadow-lg rounded-full flex justify-center items-center cursor-pointer bg-black text-xl w-[50px] h-[50px] font-extrabold">
            <FontAwesomeIcon icon={faChevronLeft} color="#FFFFFF" />
          </div>
        </div>
        <div ref={navigationNextRef} className="h-full right-3 top-0 absolute flex items-center z-10 navigation-container">
          <div className="drop-shadow-lg rounded-full flex justify-center items-center cursor-pointer bg-black text-xl w-[50px] h-[50px] font-extrabold">
            <FontAwesomeIcon icon={faChevronRight} color="#FFFFFF" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}