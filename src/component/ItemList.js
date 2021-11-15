import React from "react";
import "./ItemList.css";
import { teamsData } from "..//data";

function ItemList(props) {
  return (
    /*  <div>
      <div className="list_items"></div>
      <div className="hold">
        <h2>Hold:</h2>
        {teamsData.map((data,index)=>{return <h2>{data.name} </h2>})}
        
      </div>

      <div className="trænnere">
        <h2>Trænere:</h2>
        {teamsData.map((data,index)=>{return <h3>{data.trainer} </h3>})}
      </div>

      <div className="spillere">
        <h2>Spillere:</h2>
        {teamsData.map((data,index)=>{return <h3>{data.player} </h3>})}
      </div>
    </div>*/

    <div className="teams_container">

      {teamsData.map((data, index) => (
        <div class="teams__" key={index}>
          <h2 className="teams_title">{data.name}</h2>

          {/* loop over the trainer */}
          <div>
          <div className="trænner_title"> Træner:</div>
            {data.trainer.map((tr, i) => (
              <p  key={i}>{i+1 + "." + tr}</p>
            ))}
          </div>
          {/* loop over the players */}
          <div className="spiller">
              <div> Spiller:</div>
            {data.player.map((pl, i) => (
              <p key={i}>{i+1  + ". " +pl }</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
