import { ReactElement } from "react";

export default function AdminLayout ({ children }: { children: ReactElement }) {

  console.log('admin layout.........')

  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
    </div>
  );
}