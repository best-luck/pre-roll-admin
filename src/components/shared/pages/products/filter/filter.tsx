"use client";

import { ProductType, ProductVariantType } from "@src/lib/types/product";
import Product from "../product";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { CATEGORIES, EFFECTS, TYPES } from "@src/lib/static/vars";
import { useSearchParams } from "next/navigation";

interface Props {
  products: ProductType[];
  category: string;
  fetchProducts: (subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specials: string[], query: string) => void;
  fetchMoreProducts: (subCategory: string, weight: string, brands: string[], types: string[], effects: string[], specials: string[], query: string) => void;
  fetchMore: boolean;
}

export default function Filter(props: Props) {

  const { products, category, fetchMore, fetchMoreProducts } = props;
  const searchParams = useSearchParams();
  const query = searchParams?.get("search");
  const subCategories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.subcategory)))
  }, [])
  const weights = useMemo(() => {
    const _weights = new Set<string>();
    products.forEach(product => {
      product.variants.map((variant: ProductVariantType) => {
        _weights.add(variant.option);
      })
    })
    return Array.from(_weights);
  }, []);
  const [brands, brandIds] = useMemo(() => {
    const _brands = Array.from(new Set(products.map(product => product?.brand?.name)))
    const _brandIds: string[] = [];
    _brands.forEach(brand => {
      const product = products.find(p => p.brand && p?.brand?.name === brand);
      _brandIds.push(product?.brand.id||'');
    })
    return [_brands, _brandIds];
  }, []);

  //filters
  const [selectedSubCategory, setSelectedSubCategory] = useState(category===""?"all":"");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<boolean[]>(Array(brands.length).fill(false));
  const [selectedTypes, setSelectedTypes] = useState<boolean[]>(Array(TYPES.length).fill(false));
  const [selectedEffects, setSelectedEffects] = useState<boolean[]>(Array(EFFECTS.length).fill(false));
  const [initialLoad, setInitialLoad] = useState(true);
  const [showFilter, setShowFilter] = useState(true);

  const handleSubCategory = (subCategory: string) => {
    setSelectedSubCategory(subCategory)
  }
  const handleWeight = (weight: string) => {
    setSelectedWeight(weight);
  }
  const handleBrand = (idx: number) => {
    setSelectedBrands(selectedBrands.map((c: boolean, index: number) => (idx === index?!c:c)));
  }
  const handleTypes = (idx: number) => {
    setSelectedTypes(selectedTypes.map((c: boolean, index: number) => (idx === index?!c:c)));
  }
  const handleEffects = (idx: number) => {
    setSelectedEffects(selectedEffects.map((c: boolean, index: number) => (idx === index?!c:c)));
  }

  const toggleFilterShow = () => {
    setShowFilter(!showFilter);
  }  

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
    const _brands = selectedBrands.reduce(((s: string[], c, index) => (c?([...s, brandIds[index]]):s)), []);
    const _types = selectedTypes.reduce(((s: string[], c, index) => (c?([...s, TYPES[index]]):s)), [])
    const _effects = selectedEffects.reduce(((s: string[], c, index) => (c?([...s, EFFECTS[index]]):s)), [])
    props.fetchProducts(selectedSubCategory, selectedWeight, _brands, _types, _effects, [], query||'');
  }, [selectedBrands, selectedTypes, selectedEffects, selectedSubCategory, selectedWeight, query]);

  useEffect(() => {
    if (fetchMore) {
      const _brands = selectedBrands.reduce(((s: string[], c, index) => (c?([...s, brandIds[index]]):s)), []);
      const _types = selectedTypes.reduce(((s: string[], c, index) => (c?([...s, TYPES[index]]):s)), [])
      const _effects = selectedEffects.reduce(((s: string[], c, index) => (c?([...s, EFFECTS[index]]):s)), [])
      props.fetchMoreProducts(selectedSubCategory, selectedWeight, _brands, _types, _effects, [], query||'');
    }
  }, [fetchMore])

  return (
    <div className="lg:border-r border-gray-300 mr-0 lg:mr-10 w-full lg:w-[200px]">
      <div className="flex lg:hidden cursor-pointer items-center mb-5 text-xl font-bold" onClick={toggleFilterShow}>
        <span className="mr-3">Filter</span> <FontAwesomeIcon icon={!showFilter?faChevronUp:faChevronDown} />
      </div>
      <div className={`${showFilter?'hidden':''} lg:block animate-in slide-in-from-bottom`}>
        {
          category === "" ? (
            <div className="border-b border-gray-300 pb-10">
              <p className="uppercase text-xs font-bold">Categories</p>
              {
                CATEGORIES.map((subc: string, index: number) => <p key={`subcategory-${index}`} onClick={() => handleSubCategory(subc)} className={`uppercase text-sm mt-2 cursor-pointer ${selectedSubCategory===subc?"font-bold":""}`}>{subc.replace("_", " ")}</p>)
              }
            </div>
          ) : (
            <div className="border-b border-gray-300 pb-10">
              <p className="uppercase text-xs font-bold">Subcategories</p>
              <p className={`cursor-pointer uppercase text-sm mt-5 ${selectedSubCategory===""?"font-bold":""}`} onClick={() => handleSubCategory("")}>All {category}s</p>
              {
                subCategories.map((subc: string, index: number) => <p key={`subcategory-${index}`} onClick={() => handleSubCategory(subc)} className={`uppercase text-sm mt-2 cursor-pointer ${selectedSubCategory===subc?"font-bold":""}`}>{subc.replace("_", " ")}</p>)
              }
            </div>
          )
        }
        <div className="pr-5 pt-5 border-b border-gray-300 pb-10">
          <div className="font-bold">WEIGHTS <FontAwesomeIcon icon={faCaretDown} /></div>
          <p className="text-xs mt-3">Display availability</p>
          <div className="flex flex-wrap mt-2 gap-2">
            {
              weights.map((weight, index: number) => (
                <div
                  key={`weight-filter-${index}`}
                  className={`border rounded text-xs px-5 py-2 cursor-pointer ${weight===selectedWeight?"font-bold text-white bg-black":""}`}
                  onClick={() => handleWeight(weight)}
                  >
                  {weight}
                </div>
              ))
            }
          </div>
        </div>

        <div className="pr-5 pt-5 border-b border-gray-300 pb-10">
          <div className="font-bold uppercase">Brands <FontAwesomeIcon icon={faCaretDown} /></div>
          <div className="flex flex-wrap mt-2 gap-2 flex-col">
            {
              brands.map((brand, index: number) => (
                <div key={`brand-filter-${index}`} className="text-xs py-2 cursor-pointer flex">
                  <input
                    type="checkbox"
                    name={`brand-filter-${index}`}
                    checked={selectedBrands[index]}
                    onChange={() => handleBrand(index)} />
                  <label className="ml-3">{brand}</label>
                </div>
              ))
            }
          </div>
        </div>

        <div className="pr-5 pt-5 border-b border-gray-300 pb-10">
          <div className="font-bold uppercase">Types <FontAwesomeIcon icon={faCaretDown} /></div>
          <div className="flex flex-wrap mt-2 gap-2 flex-col">
            {
              TYPES.map((type, index: number) => (
                <div key={`type-filter-${index}`} className="text-xs py-2 cursor-pointer flex">
                  <input
                    type="checkbox"
                    name={`type-filter-${index}`}
                    checked={selectedTypes[index]}
                    onChange={() => handleTypes(index)} />
                  <label className="ml-3">{type.replace(/_/g, ' ')}</label>
                </div>
              ))
            }
          </div>
        </div>

        <div className="pr-5 pt-5 border-b border-gray-300 pb-10">
          <div className="font-bold uppercase">Effects <FontAwesomeIcon icon={faCaretDown} /></div>
          <div className="flex flex-wrap mt-2 gap-2 flex-col">
            {
              EFFECTS.map((effect, index: number) => (
                <div key={`effect-filter-${index}`} className="text-xs py-2 cursor-pointer flex">
                  <input
                    type="checkbox"
                    name={`effect-filter-${index}`}
                    checked={selectedEffects[index]}
                    onChange={() => handleEffects(index)}
                    />
                  <label className="ml-3">{effect}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}