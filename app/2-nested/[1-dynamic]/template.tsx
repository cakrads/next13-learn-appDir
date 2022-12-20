import React from "react";
import { FOLDER_APP } from "@constant";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="next-convention">
      <span>{FOLDER_APP.NESTED.DYNAMIC.TEMPLATE}</span>
      {children}
    </div>
  );
}
