import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className: string|null;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={`rounded-lg px-3 py-2 ${props.className}`}>
      {props.children}
    </button>
  )
};