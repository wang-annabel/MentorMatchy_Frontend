import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import profile_pic from "../assets/profile_pic.png"

interface Props {
    name: string;
    interests: string;
    industry: string;
    about: string;
}

const MentorFlipCard = ({name, interests, industry, about}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  const handleClickAccept = () => {
    //
  };

  const handleClickReject = () => {
    //
  };

  return (
    <div className="match-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/*Front Side*/}
        <div
          className="front"
          onClick = {handleClick}
        >
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={profile_pic} width="100px" className="img-fluid rounded-start" alt="profile picture of mentor" />
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
        </div>
        <div 
            className="back"
            onClick = {handleClick}
        >
        <p className="card-text">{about}</p>
        <button onClick={handleClickAccept}>Accept</button>
        <button onClick={handleClickReject}>Reject</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default MentorFlipCard;


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