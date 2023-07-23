import React, { Component } from "react";
import Section from "../Section/Section";
import { Reader } from "../Reader/Reader";
import publications from "../data/publications.json";
// import { Player } from "../Player/Player";
// import { PlayerList } from "../PlayerList/PlayerList";
// import videos from "../data/videos.json";

export class App extends Component {
  state = { selectedVideos: null };

  selectVideos = (link) => {
    this.setState({ selectedVideos: link });
  };

  render() {
    return (
      <>
        {/* <Section title="Player">
          <h1>Selected video: {this.state.selectedVideos}</h1>
          <PlayerList videos={videos} onSelect={this.selectVideos} />
          <Player url={this.state.selectedVideos} />
        </Section> */}

        <Section title="Reader">
          {/* <Reader></Reader> */}
          <Reader items={publications} />
        </Section>
      </>
    );
  }
}

// <!-- Разметка компонента <Reader> -->
// <div>
//   <!-- Разметка компонента <Controls> -->
//   <section>
//     <button type="button">Назад</button>
//     <button type="button">Вперед</button>
//   </section>

//   <!-- Разметка компонента <Progress> -->
//   <p>1/10</p>

//   <!-- Разметка компонента <Publication> -->
//   <article>
//     <h2>Lorem ipsum dolor sit amet</h2>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
//       molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
//       quibusdam esse libero est eius, repellendus unde nihil, sequi voluptate
//       eaque officiis aliquam impedit laborum adipisci cumque sit.
//     </p>
//   </article>
// </div>
