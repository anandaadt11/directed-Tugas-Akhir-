import Image from "next/image";

export default function Header() {
  return (
    <div className="container text-center mt-5">
      <div className="row align-items-center">
        <div className="col text-start ms-5 mb-3">
          <div className="container">
            <h2 className="mb-3">Tingkatkan Karirmu bersama kami. </h2>
            <p>
              Directed, membantumu untuk mencari pekerjaan
              <br /> sesuai bakat dan minat yang kamu miliki.
            </p>
            <button type="button" className="btn btn-outline-primary mt-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="col me-5 shadow">
          <Image
            src="/gambar/gambar-home.png"
            alt="Teen"
            height={500}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
