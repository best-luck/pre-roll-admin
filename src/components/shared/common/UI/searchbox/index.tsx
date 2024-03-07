import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface SearchBoxProps {
  placeholder: string;
}

export default function SearchBox(props: SearchBoxProps) {

  const [query, setQuery] = useState<string>("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const router = useRouter()

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (timer) clearTimeout(timer);
    const _timerId = setTimeout(() => {
      setQuery(e.target.value);
    }, 600);
    setTimer(_timerId);
  }

  useEffect(() => {
    if (query) {
      router.push(`/shop/filter?search=${query}`);
    }
  }, [query]);

  return (
    <div className="max-w-xl">   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" id="default-search" onChange={onChange} className="block w-full px-4 py-2 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500" placeholder={props.placeholder} required />
      </div>
    </div>
  )
}