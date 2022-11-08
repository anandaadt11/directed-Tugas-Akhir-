import Link from "next/link";

interface CardProps {
  title: "Courses" | "Jobseeker";
  buttonTitle?: boolean;
  link: String;
}

export default function Card(props: Partial<CardProps>) {
  const { title, buttonTitle = "Get Started", link } = props;
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
          <Link href={`${link}`}>
            <button type="button" className="btn btn-outline-primary">
              {buttonTitle}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
