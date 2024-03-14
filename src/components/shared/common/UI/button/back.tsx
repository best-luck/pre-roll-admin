"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function BackButton() {

  const router = useRouter();
  
  const goBack = () => {
    router.back();
  }

  return (
    <a onClick={goBack} className="cursor-pointer font-bold text-gray-500">
      <FontAwesomeIcon icon={faChevronLeft} /> Back
    </a>
  );
}