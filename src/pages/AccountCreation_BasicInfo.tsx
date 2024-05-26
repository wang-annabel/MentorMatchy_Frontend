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
    </>
  );
}

export default AccountCreationBasicInfo;
