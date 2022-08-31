import React from "react";
import "../App";



function PlayerDetails(props) {
  return (
    <div className="c-player--details">
      
        <img src={props.song.img_src} className="App-logo" alt="" />
      
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artist}</h4>
    </div>
  );
}

export default PlayerDetails;
