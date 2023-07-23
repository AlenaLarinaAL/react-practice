import { Component } from "react";
import { Controls } from "./Contols";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

import publications from "../data/publications.json";

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  render() {
    // console.log(this.props.items[this.state.index]);
    const { index } = this.state;
    const { items } = this.props;

    const currentItem = items[index];
    const totalItems = items.length;

    return (
      <>
        <Controls
          onChange={this.changeIndex}
          current={index + 1}
          total={totalItems}
        />

        <Progress total={totalItems} current={index} />
        <Publication item={currentItem} />
      </>
    );
  }
}
