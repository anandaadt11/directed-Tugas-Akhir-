import Image from "next/image";

export default function CardCourses() {
  return (
    <div className="col-md-3">
      <div className="card m-3 shadow" style={{ width: "16rem" }}>
        <Image
          src="/CardCourses/CardCourse1.jpg"
          className="card-img-top"
          alt="..."
          width={500}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
