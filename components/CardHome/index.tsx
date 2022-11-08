import Card from "./Card";

export default function CardHome() {
  return (
    <>
      <div className="container text-center mt-5">
        <h1>Pilih keinginnan kalian</h1>
        <p>Kalian ingin mengikuti kursus atau mencari pekerjaan</p>
      </div>

      <div className="container text-center mt-5 ">
        <div className="row justify-content-center">
          <Card title="Courses" />
          <Card title="Jobseeker" />
        </div>
      </div>
    </>
  );
}
