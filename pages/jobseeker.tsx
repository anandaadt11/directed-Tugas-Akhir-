import CardJobseeker from "../components/CardJobseeker";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function jobseeker() {
  return (
    <>
      <Navbar />
      <div className="text-center ">
        <h1>Pilih Pekerjaan Yang Kalian Inginkan</h1>
        <p>
          Kalian bisa memilih pekerjaan yang kalian inginkan <br /> semua
          pekerjaan terkait programer terdapat disini.
        </p>
      </div>
      <div className="container mt-3">
        <div className="container text-center">
          <div className="col">
            <CardJobseeker />
            <CardJobseeker />
            <CardJobseeker />
            <CardJobseeker />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
