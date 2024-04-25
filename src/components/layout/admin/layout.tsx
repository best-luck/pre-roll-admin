import { ReactElement } from "react";

export default function AdminLayout ({ children }: { children: ReactElement }) {

  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
    </div>
  );
}