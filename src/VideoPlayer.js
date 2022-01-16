/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import sources, { foreignSources } from './sources';
import './App.css'
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'videojs-hotkeys';
import 'videojs-seek-buttons';
import qualitySelector from '@silvermine/videojs-quality-selector';

qualitySelector(videojs);

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
      player.src(sources);
      // player.src(
        // [{
        //   src: foreignSources[2].src,
        //   type: 'video/mp4',
        //   label: foreignSources[2].label,
        // }]
        //   [
        //   {
        //     src: sources[4].source_file,
        //     type: 'video/mp4',
        //     label: sources[4].name,
        //   }
        // ]
      // );
      player.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        alwaysCaptureHotkeys: true
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  );
};

export default VideoJS;
