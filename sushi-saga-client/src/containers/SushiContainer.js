import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

// function
const SushiContainer = props => {
  // Don't need this.props because it's a function component and it's passed in
  console.log(props);
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          // Render one for each sushi
          // Step 8
          return (
            <Sushi eatSushi={props.eatSushi} key={sushi.id} sushi={sushi} />
          );
        })}
        {/* Need props */}
        <MoreButton handleButtonClick={props.handleButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
