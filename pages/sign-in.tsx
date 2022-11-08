import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function SignIn() {
  return (
    <>
      <div
        className="container frame shadow-lg p-5 mb-5 "
        style={{ width: "400px" }}
      >
        {/* <!-- Pills content --> */}
        <div className="fw-bold mb-5">
          <Link href="/" className="navbar-brand ">
            <h1>Directed.</h1>
          </Link>
          <hr />
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <Link href="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
