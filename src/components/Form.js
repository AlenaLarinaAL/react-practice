import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    nickname: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  nicknameInputId = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);

    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      name: "",
      nickname: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.nicknameInputId}>
          Nickname{" "}
          <input
            type="text"
            name="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            id={this.nicknameInputId}
          ></input>
        </label>

        <p>Your`s level:</p>

        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          senior
        </label>

        <br></br>
        <br></br>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Accept all
        </label>

        <br></br>
        <br></br>

        <button type="submit" disabled={!this.state.licence}>Submit</button>
      </form>
    );
  }
}

export default Form;
