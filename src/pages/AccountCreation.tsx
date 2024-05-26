import { Link } from "react-router-dom";
import HeaderBody from "../components/HeaderBody";

function AccountCreation() {
  const headerBody = (
    <HeaderBody
      header="Welcome to MentorMatchy!"
      body="I'm joining as a:"
    ></HeaderBody>
  );
  return (
    <>
      {headerBody}
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              data-toggle="button"
              className="btn btn-light"
            >
              Mentee
            </button>
            <button type="button" data-toggle="button" className="btn btn-dark">
              Mentor
            </button>
          </div>
        </div>
      </div>
      <div className="float-end">
        <a href="/basicInfo">
          <button>Next</button>
        </a>
      </div>
    </>
  );
}

export default AccountCreation;
