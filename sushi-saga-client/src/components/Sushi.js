import React, { Fragment } from "react";

// Function component so no state
const Sushi = props => {
  // console.log(props);
  // It knows all the stuff about the sushis!
  // Destructure for a better life
  // Step 9
  const { name, img_url, price, eaten } = props.sushi;

  return (
    <div className="sushi">
      {/* Step 13 */}
      <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
        {props.sushi.eaten ? null : (
          <img src={img_url} width="100%" alt={name} />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Step 10 */}
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;

// Write the function in App that changes the eaten boolean
// Pass it down
// Dynamically render
