import React from "react";
import MenuFooter from "./MenuFooter";

export default function Menus() {
  return (
    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
      <h5>Links</h5>
      <ul className="list-unstyled">
        <MenuFooter title="Home" />
        <MenuFooter title="Course" />
        <MenuFooter title="Jobseeker" />
        <MenuFooter title="About" />
      </ul>
    </div>
  );
}
