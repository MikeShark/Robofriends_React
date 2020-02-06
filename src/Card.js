import React from "react";

const Card = props => {
  // destructuring:
  const { name, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.id}?size=100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
