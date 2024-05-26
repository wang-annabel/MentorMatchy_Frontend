import React from 'react';

import FlipCard from "../MatchTile";
import MentorFlipCard from "../RequestTile";

const MatchesPage = () => {
    return (
      <div>
        <FlipCard name="Mentor 1" interests="board games, walks" industry="Film/Media" about="director"></FlipCard>
        <MentorFlipCard name="Requester 1" interests="singing, walks" industry="Film/Media" about="college student"></MentorFlipCard>
      </div>
    );
  }
  
  export default MatchesPage;
  