import HeaderBody from "../components/HeaderBody";
import WorkStyleForm from "../components/WorkStyleForm";

function WorkStyle() {
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </a>
      </div>
    </>
  );
}

export default WorkStyle;
