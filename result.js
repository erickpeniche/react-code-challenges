import React, { Component } from "react";
import ReactDOM from "react-dom";
import { validateEmail } from "./validators";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.email = React.createRef();

    this.state = {
      disableSubmit: true
    };

    this.handleOnFormChange = this.handleOnFormChange.bind(this);
  }

  handleOnFormChange() {
    const email = this.email.current.value;
    this.setState({ disableSubmit: !validateEmail(email) });
  }

  render() {
    const { disableSubmit } = this.state;

    return (
      <div className="App">
        <form onChange={this.handleOnFormChange}>
          <label>Name</label>
          <input id="name" ref={this.name} />
          <label>e-mail</label>
          <input id="email" ref={this.email} />
          <button type="submit" disabled={disableSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
