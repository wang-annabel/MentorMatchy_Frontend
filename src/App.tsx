import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfilePhoto from './components/ProfilePhoto';
import UserInfo from './components/UserInfo';
import MenteeMatched from './components/Mentee_MatchedWith';

function App() {
    return (
        <Container>
            <Row>
                <Col><ProfilePhoto name='Jane Doe' pronouns='she/her' email='jdoe@gmail.com'></ProfilePhoto></Col>
                <Col><UserInfo about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in turpis eu leo feugiat gravida vel eu erat. Maecenas lacinia aliquet felis vitae sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum velit ipsum, ac rutrum sapien aliquet sed. Etiam malesuada sapien vel.' interests='Lorem, ipsum, dolor, sit, amet' industry='Film/Media'></UserInfo></Col>           
            </Row>
            <div><MenteeMatched name="Greta Gerwig"></MenteeMatched></div>
        </Container>
    );
}

export default App;