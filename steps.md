1.  Component tree
2.  Who has state?
3.  imports and exports (default)
4.  fetch from the App in a componentDidMount
5.  Return sushis, add to state, update state
    The initial render won't have the updated state -- have to conditionally render
6.  Pass the props to SushiContainer
7.  If you need to limit the number displayed: The app can handle it and pass the right number down
    this.setState({ sushis: sushis.slice(0, 4) });
8.
