import Link from "next/link";

export default function Register() {
  return (
    <div
      className="container frame shadow-lg p-5 mb-5 "
      style={{ width: "400px" }}
    >
      <div className="fw-bold mb-5">
        <Link href="/" className="navbar-brand ">
          <h1>Directed.</h1>
        </Link>
        <hr />
      </div>

      {/* <!-- Name input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" />
        <label className="form-label" htmlFor="registerName">
          Name
        </label>
      </div>

      {/* <!-- Username input --> */}
      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" />
        <label className="form-label" htmlFor="registerUsername">
          Username
        </label>
      </div>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="registerEmail" className="form-control" />
        <label className="form-label" htmlFor="registerEmail">
          Email
        </label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" />
        <label className="form-label" htmlFor="registerPassword">
          Password
        </label>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="mb-2 ">
        <div className="border border-dark rounded p-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Pencari Pekerjaan / Ingin Belajar
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Penyedia Pekerjaan
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Mentor Kursus
            </label>
          </div>
        </div>
        <label className="form-label" htmlFor="registerPassword">
          Pilih Role
        </label>
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-3">
        Sign in
      </button>

      <div className="text-center mt-5  ">
        <p>
          You have account <Link href="/sign-in">Login</Link>
        </p>
      </div>
    </div>
  );
}
