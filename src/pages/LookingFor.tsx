import LookingForForm from "../components/LookingForForm";
import HeaderBody from "../components/HeaderBody";

function LookingFor({setUserProfile}) {
  const headerBody = (
    <HeaderBody
      header="What are you looking for?"
      body="Connect with likeminded mentors and get the most out of your match."
    ></HeaderBody>
  );
  return (
    <>
      {headerBody}
      <LookingForForm />
      <button type="button" className="btn btn-primary">
        Next
      </button>
    </>
  );
}

export default LookingFor;
