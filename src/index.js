import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        { firstName: "Kenzie", lastName: "Benson" },
        { firstName: "Johnny", lastName: "Moon" },
        { firstName: "Isaac", lastName: "Hunt" },
        { firstName: "Marlee", lastName: "Burgess" },
        { firstName: "Judah", lastName: "Klein" },
        { firstName: "Shiloh", lastName: "Trevino" },
        { firstName: "Davian", lastName: "Lynn" }
      ]
    };
  }

  render() {
    return (
      <div style={styles}>
        <Hello name="List" />
        <div>{/* IMPLEMENT YOUR CODE */}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
