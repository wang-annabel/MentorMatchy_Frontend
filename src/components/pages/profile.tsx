import React from 'react';
import ProfilePhoto from '../ProfilePhoto'
import UserInfo from '../UserInfo'
import MenteeMatched from "../Mentee_MatchedWith"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfilePage = () => {
    return (
      <div>
      <Container>
        <Row>
          <Col><ProfilePhoto name="Jane Doe" pronouns="she/her" email="jdoe@gmail.com"></ProfilePhoto></Col>
          <Col><UserInfo about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in turpis eu leo feugiat gravida vel eu erat. Maecenas lacinia aliquet felis vitae sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum velit ipsum, ac rutrum sapien aliquet sed. Etiam malesuada sapien vel." interests="Lorem, ipsum, dolor, sit, amet" industry="Film/Media"></UserInfo></Col>
        </Row>
        <h1>Matched With</h1>
        <Row>
          <MenteeMatched name="Greta Gerwig"></MenteeMatched>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default ProfilePage;
  