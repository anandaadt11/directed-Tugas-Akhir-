import CardCourses from "../components/CardCourses";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function courses() {
  return (
    <>
      <Navbar />
      <div className="text-center ">
        <h1>
          Pilih Kursus Yang <br />
          Kalian Inginkan
        </h1>
        <p>
          Kalian bisa memilih kursus yang kalian inginkan <br /> semua
          pembelajaran terkait programer terdapat disini.
        </p>
      </div>
      <div className="container mt-3">
        <div className="container text-center">
          <div className="row justify-content-center">
            <CardCourses />
            <CardCourses />
            <CardCourses />
            <CardCourses />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
