import Card from 'react-bootstrap/Card';

interface Props {
    about: string;
    interests: string;
    industry: string;
}

function UserInfo({about, interests, industry}: Props) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Subtitle>About Me</Card.Subtitle>
        <Card.Text>
            {about}
        </Card.Text>
        <Card.Subtitle>Interests</Card.Subtitle>
        <Card.Text>
            {interests}
        </Card.Text>
        <Card.Subtitle>Industry</Card.Subtitle>
        <Card.Text>
            {industry}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserInfo;