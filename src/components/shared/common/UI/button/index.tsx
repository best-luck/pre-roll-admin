import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className: string|null;
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined | null;
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={`rounded-lg px-3 py-2 ${props.className}`} type={props.type||'button'}>
      {props.children}
    </button>
  )
};