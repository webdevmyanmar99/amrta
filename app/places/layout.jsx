import React from "react";
import BacktoHome from "../backtohome";

export default function PlaceDetailLayout({ children }) {
  return (
    <div>
      <BacktoHome />
      {children}
    </div>
  );
}
