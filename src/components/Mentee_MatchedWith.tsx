import CCard from 'react-bootstrap/Card';
import profile_pic from "../assets/profile_pic.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    name: string;
}

function MenteeMatched({name}: Props) {
  return (
    <CCard style={{ width: '18rem'}}>
      <CCard.Body>
        <Container>
            <Row>
                <Col><CCard.Img src={profile_pic} className="img-fluid"/></Col>
                <Col><CCard.Title>{name}</CCard.Title></Col>
            </Row>
        </Container>
      </CCard.Body>
    </CCard>
  );
}

export default MenteeMatched;