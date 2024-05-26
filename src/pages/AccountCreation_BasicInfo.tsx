import HeaderBody from "../components/HeaderBody";
import BasicInfoForm from "../components/BasicInfo";

function AccountCreationBasicInfo() {
  const headerbody = (
    <HeaderBody
      header="Basic Info"
      body="Fields marked * are required."
    ></HeaderBody>
  );
  return (
    <>
      {headerbody}
      <BasicInfoForm />
      <div className="float-end">
        <a href="/workStyle">
          <button type="button" className="btn btn-primary">
            Next
          </button>
        </a>
      </div>
    </>
  );
}

export default AccountCreationBasicInfo;
