import { PlayerWrapper, StyledPlayer } from "./Player.styled";
import { Component } from "react";

export class Player extends Component {
  state = {};
  render() {
    const { url } = this.props;
    return (
      <>
        {url && (
          <PlayerWrapper>
            <StyledPlayer url={url} controls />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
