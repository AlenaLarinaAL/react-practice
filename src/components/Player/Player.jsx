import { Spinner } from "../Spinner/Spinner";
import { PlayerWrapper, StyledPlayer } from "./Player.styled";
import { Component } from "react";

export class Player extends Component {
  state = {
    isvideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isvideoLoaded: false });
    }
  }

  render() {
    const { url } = this.props;
    const { isvideoLoaded } = this.state;
    const showLoader = url && !isvideoLoaded;
    const playerSize = isvideoLoaded ? "100%" : 0;

    return (
      <>
        {showLoader && <Spinner />}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              controls
              onReady={() => {
                this.setState({ isvideoLoaded: true });
              }}
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
