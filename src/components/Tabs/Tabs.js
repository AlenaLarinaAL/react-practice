import React, { PureComponent } from 'react';

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);
    const { activeTabIdx } = this.state;
    const { tabs } = this.props;
    const activeTabs = tabs[activeTabIdx];
    return (
      <>
        <div>
          {tabs.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h3>{activeTabs.label}</h3>
          <p>{activeTabs.content}</p>
        </div>
      </>
    );
  }
}
