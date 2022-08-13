import React from "react";
import { Data } from "../Data/Data";
import { BsArrowRight } from "react-icons/bs";

function Clubs() {
  return (
    <div>
      <p className="club-header">Clubs</p>
      <div className="club-container">
        {Data.teams.map((item, index) => {
          return (
            <div className="club-card" key={index}>
              <img src={item.images.stadium} alt="" className="stadium" />
              <div className="card-info">
                <img src={item.images.crest} alt="" className="team-logo" />
                <p className="team-name">{item.meta.name}</p>
                <p className="team-stadium">{item.meta.stadium}</p>
                <div className="arow-link">
                  <p className="team-link">Club Profile </p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clubs;
