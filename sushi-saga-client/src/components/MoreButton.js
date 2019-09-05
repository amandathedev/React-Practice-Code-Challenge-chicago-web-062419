import React from "react";

const MoreButton = props => {
  // Change what is being passed down
  // Step 12.5
  return <button onClick={props.handleButtonClick}>More sushi!</button>;
};

export default MoreButton;
