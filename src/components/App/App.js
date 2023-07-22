import React, { Component } from "react";
import Section from "../Section/Section";
import { Player } from "../Player/Player";
import { PlayerList } from "../PlayerList/PlayerList";
import videos from "../data/videos.json";

export class App extends Component {
  state = { selectedVideos: null };

  selectVideos = (link) => {
    this.setState({ selectedVideos: link });
  };

  render() {
    return (
      <>
        <Section title="Player">
          <PlayerList videos={videos} onSelect={this.selectVideos} />
          <Player url={this.state.selectedVideos} />
        </Section>
      </>
    );
  }
}
