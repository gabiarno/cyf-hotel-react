import React from "react";

const InfoCard = props => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.city}</h1>
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          More Info
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
