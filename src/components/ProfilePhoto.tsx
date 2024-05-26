import CCard from 'react-bootstrap/Card';
import profile_pic from "../assets/profile_pic.png"

interface Props {
    name: string;
    pronouns: string;
    email: string;
}

function ProfilePhoto({name, pronouns, email}: Props) {
  return (
    <CCard className="text-center" style={{ width: '18rem'}}>
      <CCard.Img variant="top" src={profile_pic} />
      <CCard.Body>
        <CCard.Title>{name}</CCard.Title>
        <CCard.Subtitle>
            {pronouns}
        </CCard.Subtitle>
        <CCard.Text>
            {email}
        </CCard.Text>
      </CCard.Body>
    </CCard>
  );
}

export default ProfilePhoto;
