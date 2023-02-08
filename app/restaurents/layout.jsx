import React from "react";
import BacktoHome from "../backtohome";

export default function RestaurentDetailLayout({ children }) {
  return (
    <div>
      <BacktoHome />
      {children}
    </div>
  );
}
