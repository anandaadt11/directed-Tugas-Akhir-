import First from "./First";
import Menus from "./Menus";

export default function Footer() {
  return (
    <>
      <footer className="bd-footer  mt-5 bg-light">
        <div className="container py-4 py-md-5 px-4 px-md-3">
          <div className="row">
            <First />
            <Menus />
          </div>
        </div>
      </footer>
    </>
  );
}
