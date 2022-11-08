import Image from "next/image";

export default function CardJobseeker() {
  return (
    <div className="col-md">
      <div className="card m-4 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src="/CardJob/Cardjob.jpg"
              className=" img-fluid rounded-start"
              alt="Job"
              width={500}
              height={100}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

              <button type="button" className="btn btn-outline-primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
