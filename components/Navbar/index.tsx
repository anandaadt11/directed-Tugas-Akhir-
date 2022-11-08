import MenuNavbar from "./MenuNavbar";
import ToggleNavbar from "./ToggleNavbar";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Directed.
        </a>
        <ToggleNavbar />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <MenuNavbar title="Home" active />
            <MenuNavbar title="Courses" href="/courses" />
            <MenuNavbar title="Jobseeker" href="/jobseeker" />
            <MenuNavbar title="About" href="/about" />
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <MenuNavbar title="Sign-in" href="/sign-in" textColor btnLight />
              <MenuNavbar title="Register" href="/register" />
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
