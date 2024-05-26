import HeaderBody from "../components/HeaderBody";
import WorkStyleForm from "../components/WorkStyleForm";

function WorkStyle({setUserProfile}) {
  const headerbody = (
    <HeaderBody
      header="Work Style"
      body="Rate your working preferences on a 1-10 scale."
    ></HeaderBody>
  );
  return (
    <>
      {headerbody}
      <WorkStyleForm />

      <div className="float-end">
      <a href="/profile">
          <button className="btn btn-primary">
            Next
          </button>
        </a>
        </div>
    </>
  );
}

export default WorkStyle;
