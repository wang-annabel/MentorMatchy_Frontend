import React from 'react';
import ProfilePhoto from '../ProfilePhoto'
import UserInfo from '../UserInfo'
import MenteeMatched from "../Mentee_MatchedWith"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('')
  const [pronouns, setPronouns] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')
  const [interests, setInterests] = useState('')
  const[industry, setIndustry] = useState('')

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  useEffect(() => {
    fetch("http://localhost:3000/email/kmora@gmail.com", requestOptions)
      .then(result=> {
        return result.json()
      }) 
      .then(data => {
        const userData = data[0]

        setName(userData.first_name + " " + userData.last_name)
        setPronouns(userData.pronouns)
        setAbout(userData.about)
        setEmail(userData.email_address)
        setInterests(userData.interests)
        setIndustry(userData.industry)
      })
  }, [])

    return (
      <div>
      <Container>
        <Row>
          <Col><ProfilePhoto name={name} pronouns={pronouns} email={email}></ProfilePhoto></Col>
          <Col><UserInfo about={about}
          interests={interests} industry={industry}></UserInfo></Col>
        </Row>
        <Row>
          <MenteeMatched name="Greta Gerwig"></MenteeMatched>
        </Row>
      </Container>
      </div>
    );
  }
  
  export default ProfilePage;
  