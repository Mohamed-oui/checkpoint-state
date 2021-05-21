import React, { Component } from "react";
import Profile from "./components/Profile";
import "./App.css";
import Counter from "./components/Counter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      profile: [
        {
          name: "Albert Einstein",
          imgsrc:
            "https://opimedia.azureedge.net/-/media/images/utr/editorial/articles/online-articles/2014/04-01/albert-einstein-the-humanitarian/albert-einstein-jpg.jpg",
          profession: "Physicien théoricien",
          isShow: false,
        },
      ],
    };
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div>
        <button
          style={{ marginTop: "100px", marginRight: "40%", marginLeft: "47%" }}
          onClick={this.handleClick}
        >
          {" "}
          {this.state.isShow ? "Hide profile" : "Show profile"}
        </button>
        {this.state.isShow ? <handleClick /> : ""}
        {this.state.isShow ? (
          <Profile
            name={this.state.profile[0].name}
            imgsrc={this.state.profile[0].imgsrc}
            profession={this.state.profile[0].profession}
          />
        ) : (
          <Counter />
        )}
      </div>
    );
  }
}

export default App;
