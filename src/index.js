import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Instructions from "./instructions";
import MyForm from "./form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title
          title="React Challenge"
          subtitle="Use your skills to make this work!"
        />
        <Instructions />
        <MyForm />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
