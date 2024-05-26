import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import profile_pic from "../assets/profile_pic.png"
import "./tile.css"

interface Props {
    name: string;
    interests: string;
    industry: string;
    about: string;
    pronouns: string;
    image: string;
}

const FlipCard = ({name, interests, industry, about, pronouns, image}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    // find matches!
  }

  // https://blog.openreplay.com/creating-animated-flip-cards-in-react/
  
  return (
    <div className="match-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/*Front Side*/}
        <div className="front" onClick={handleCardClick}>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={image} width="10px" alt="profile picture of mentor" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Pronouns: {pronouns}</p>
              <p className="card-text">Interests: {interests}</p>
              <p className="card-text">Industry: {industry}</p>
              <p className="card-text">About Me: {about}</p>
          </div>
        </div>
      </div>


      {/* <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={profile_pic} width="100px"className="img-fluid rounded-start" alt="profile picture of mentor" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Interests: {interests}</p>
                    <p className="card-text">Industry: {industry}</p>
                </div>
            </div>
        </div>
  </div> */}




    </div>
      <div 
        className="back"
        onClick={handleCardClick}
      >
      <button onClick={handleButtonClick}>Match</button>
      </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;


/*
const MatchTile = ({name, interests, industry, about}: Props) => {
  return (
    <>
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={profile_pic} className="img-fluid rounded-start" alt="profile picture of mentor" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Interests: {interests}</p>
                    <p className="card-text">Industry: {industry}</p>
                </div>
            </div>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
            <p className="card-text">{about}</p>
            <button type="button" className="btn btn-light">Match</button>
        </div>
    </div>
    </>
  )
}

export default MatchTile;
*/