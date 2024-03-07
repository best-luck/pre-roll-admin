import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductType } from "../../../../../lib/types/product";
import Product from "../product";
// Import Swiper styles
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2},
  { width: 700, itemsToShow: 3},
  { width: 900, itemsToShow: 4},
  { width: 1200, itemsToShow: 5 },
];

export default function ProductsSlier({ products, selectProduct }: { products: ProductType[], selectProduct: (p: ProductType) => void; }) {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        breakpoints={{
          500: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
      </Swiper>
    </div>
  );
}