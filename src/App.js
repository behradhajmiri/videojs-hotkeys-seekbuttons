import React from 'react';
import VideoJS from './VideoPlayer';
import { foreignSources } from './sources';

const url = foreignSources[1].src;

const App = function App() {

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    // controlBar: {
    // 'pictureInPictureToggle': true,
    // 'picture-in-picture-toggle': true
    // 'vjs-picture-in-picture-control': true
    //   children: [
    //     'playToggle',
    //     'volumeMenuButton',
    //     'currentTimeDisplay',
    //     'timeDivider',
    //     'durationDisplay',
    //     'progressControl',
    //     'remainingTimeDisplay',
    //     'picture-in-picture-toggle',
    //     'fullscreenToggle',
    //     'pictureInPictureToggle',
    //     'vjs-picture-in-picture-control'
    //   ]
    // },
    plugins: {
      // videoJsResolutionSwitcher: {
      //   default: 'high',
      //   dynamicLabel: true
      // },
      seekButtons: {
        forward: 5,
        back: 10
      },
    },
    sources: [{
      src: url,
      type: 'video/mp4'
    },
    {
      src: url,
      type: 'video/webm',
    },
    {
      src: url,
      type: 'video/ogg',
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
