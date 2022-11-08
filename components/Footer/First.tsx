import React from "react";

export default function First() {
  return (
    <div className="col-lg-3 mb-3">
      <a className="navbar-brand fw-bold fs-3" href="#">
        Directed.
      </a>
      <ul className="list-unstyled small text-muted">
        <li className="mb-2">
          Designed and built with all the love in the world by the{" "}
          <a href="/docs/5.2/about/team/">Bootstrap team</a> with the help of{" "}
          <a href="https://github.com/twbs/bootstrap/graphs/contributors">
            our contributors
          </a>
          .
        </li>
        <li className="mb-2">Code licensed .</li>
        <li className="mb-2">Currently v5.2.2.</li>
      </ul>
    </div>
  );
}
