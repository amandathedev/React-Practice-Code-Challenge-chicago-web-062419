import React, { Component } from "react";

class SushiWallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: 100,
      newCredits: ""
    };
  }

  handleCreditChange = event => {
    this.setState({
      newCredits: event.target.value
    });
    console.log(this.state.newCredits);
  };

  render() {
    return (
      <div className="walletForm">
        <h1>Buy more sushi credits</h1>
        <form>
          <label>Previous balance: {this.state.balance} </label> <br></br>
          <label>Enter an amount:</label>
          <input
            type="text"
            id="newCredits"
            onChange={event => this.handleCreditChange(event)}
            value={this.state.newCredits}
          ></input>
          <br></br>
          <label>
            New balance:{" "}
            {parseInt(this.state.balance) + parseInt(this.state.newCredits)}
          </label>
        </form>
      </div>
    );
  }
}

export default SushiWallet;
