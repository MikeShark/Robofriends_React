import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    // this.setState({ robots: robots })
    fetch("https://jsonplaceholder.typicode.com/users")
<<<<<<< HEAD
      .then(response => response.json())
=======
      .then(response => {
        return response.json();
      })
>>>>>>> 865b21b75bd32e53534761ec9b186deea9fe3e36
      .then(users => {
        this.setState({ robots: users });
        console.log(users);
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
