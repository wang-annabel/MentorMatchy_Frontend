import React, { useEffect, useState } from 'react';
import '../tile.css';
import axios from 'axios';

import FlipCard from "../MatchTile";
// import MentorFlipCard from "../RequestTile";

const MatchesPage = () => {
  const [matches, setMatches] = useState([])

    useEffect(() => {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    
      
      fetch("http://localhost:3000/matchy/kmora@gmail.com", requestOptions)
        .then((response) => response.json())
        .then((result) => setMatches(result))
        .catch((error) => console.error(error));
    }, []);

    const handleButtonClick = async () => {
      try {
        const email = 'kmora@gmail.com'
        const response = await axios.get(`/matchy/${email}`); 
        setMatches(response.data);
      } catch (error) {
        console.error('Error:', error);
      }

      try {
        const response = await fetch('/run-python-code', { method: 'POST' });
        const data = await response.json();
        console.log(data); // Handle the response as needed
      } catch (error) {
        

      }
    };

    return (
      <div>
      <h1>Your Top Matches</h1>
      <div className="run-button"><button onClick={handleButtonClick}>Start Matching!</button></div>
      <div className="tile-container">

        {matches.map(match => 
           <FlipCard name={match.first_name + " " + match.last_name} pronouns={match.pronouns} interests={match.interests} industry={match.industry} about={match.about_me} image={match.photo_link}></FlipCard>
        )}
        {/* <FlipCard name="Mentor 1" interests="board games, walks" industry="Film/Media" about="director"></FlipCard>
        <MentorFlipCard name="Requester 1" interests="singing, walks" industry="Film/Media" about="college student"></MentorFlipCard> */}
      </div>
      </div>
    );
  }
  
  export default MatchesPage;
  