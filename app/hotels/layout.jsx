import React from "react";
import BacktoHome from "../backtohome";

export default function HotelDetailLayout({ children }) {
  return (
    <div>
      <BacktoHome />
      {children}
    </div>
  );
}
