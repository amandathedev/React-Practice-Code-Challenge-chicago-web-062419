import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";
// Parent of SushiContainer, Table --> only ones to import

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      firstSushi: 0
      // lastSushi: firstSushi + 4
    };
  }

  // Step 12
  handleButtonClick = () => {
    // Update state
    // Need prevState because we have to reference state inside setstate
    this.setState(prevState => {
      return {
        // Increment starting number by 4
        firstSushi: (prevState.firstSushi += 4)
      };
    });
  };

  eatSushi = currentSushi => {
    let sushiArray = this.state.sushis.map(sushi => {
      if (sushi.id === currentSushi.id) {
        sushi.eaten = true;
        return sushi;
      } else {
        return sushi;
      }
    });
    this.setState({ sushis: sushiArray });
    // this.setState({
    //   [this.state.sushis[1].eaten]: true
    // });

    // console.log(this.state.sushis[0].eaten);
    // console.log(id);
    console.log(this.state.sushis[1].eaten);
    // this.state.sushis[id].eaten = true;

    // this.setState(prevState => {
    //   return {};
    // });
    // return this.state.sushis.filter(sushi => id === this.state.id);
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        let falseSushis = sushis.map(oneSushi => {
          oneSushi.eaten = false;
          return oneSushi;
        });
        // Not dynamic
        // this.setState({ sushis: sushis.slice(0, 4) });

        // Reference state inside setstate we have to pass a callback
        // Step 11
        // Give me a clone of state and do stuff to it
        this.setState({
          // Pass them all
          sushis: falseSushis
        });
        // console.log(sushis);
      })
      .catch(alert);
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        {/* Pass the handle button click function all the way down to morebutton */}
        <SushiContainer
          eatSushi={this.eatSushi}
          handleButtonClick={this.handleButtonClick}
          // Pass 4
          // Pass the return of a function
          sushis={this.state.sushis.slice(
            this.state.firstSushi,
            this.state.firstSushi + 4
          )}
        />
        <Table />
        <SushiWallet />
      </div>
    );
  }
}

export default App;
