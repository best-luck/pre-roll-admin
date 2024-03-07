"use client";

import { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import AgeRestrictComponent from "@src/components/shared/pages/restrict/AgeRestrict";

export default function AgeRestrictModal() {

  const [passed, setPassed] = useState<boolean>(true);

  const confirmModal = () => {
    localStorage.setItem("over21", "passed");
    setPassed(true);
  }

  useEffect(() => {
    if (!localStorage.getItem("over21")) {
      setPassed(false)
    }
  }, []);

  return (
    <ModalWrapper show={!passed}>
      <AgeRestrictComponent
        confirmModal={confirmModal} />
    </ModalWrapper>
  );
}