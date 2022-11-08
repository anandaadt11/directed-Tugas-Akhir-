interface CardProps {
  title: "Courses" | "Jobseeker";
  buttonTitle?: boolean;
}
export default function Card(props: Partial<CardProps>) {
  const { title, buttonTitle = "Get Started" } = props;
  return (
    <div className="col-md-4 mb-3 ">
      <div className="card me-5 shadow-lg">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3>{title}</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <button type="button" className="btn btn-outline-primary">
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}
