import React, { Component } from "react";

class AddTask extends Component {
  state = {
    name: "",
    isFavourite: false,
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Name shouldn't be empty!");
      return;
    }

    //Props from Child to parents
    this.props.addFriendHandler(this.state);
    this.setState({ name: "", isFavourite: false });
  };

  render() {
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Enter your task's name"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ name: e.target.value, isFavourite: false })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
