'use client';

import styled, { css } from 'styled-components';
import Image from 'next/image';

import PauseCircle from '../../shared/assets/icons/pause-circle.svg';
import PlayCircle from '../../shared/assets/icons/play-circle.svg';
import VolumeSvg from '../../shared/assets/icons/volume.svg';
import PrevSvg from '../../shared/assets/icons/skip-prev.svg';
import NextSvg from '../../shared/assets/icons/skip-next.svg';
import LikeSvg from '../../shared/assets/icons/like_outline.svg';

export const AudioPlayer = styled.div`
  border: rgb(220 38 38/ 0.6);
  width: 100%;
  background-color: rgb(38 38 38/ 0.8);
  position: sticky;
  margin-top: auto;
  bottom: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 22px 20px 8px;
  gap: 5px;
  /* position: fixed; */
  box-sizing: border-box;
  backdrop-filter: blur(10px);
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  gap: 10px;
`;

export const SongImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  height: 50px;
  width: 50px;
  border-radius: 5px;
`;

export const ArtistName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const SongTitle = styled.p`
  margin: 0;
  color: rgb(112 112 122/ 1);
`;

export const ControlButton = styled.button`
  background-color: rgb(29 78 216/ 1);
  border-radius: 6px;
  width: 80px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
`;

interface IAudioTrack {
  percent: number;
}

export const AudioTrack = styled.div<IAudioTrack>`
  /* width: ${(props) => props.percent}%; */
  width: 100%;
  transform: scaleX(${(p) => (isNaN(p.percent) ? '0' : p.percent)}%);
  transform-origin: left;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2962ff;
  height: 12px;
  transition: 0.4s;
`;

export const AudioTrackBackground = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #636363;
  height: 12px;
`;

export const CurrentDuration = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 9px;
  letter-spacing: 1px;
`;

export const TotalDuration = styled.span`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 9px;
  letter-spacing: 1px;
`;

export const VolumeControl = styled.input`
  width: auto;
  background-color: red;
  height: 5px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: -30px;
    top: -7px;
    background-image: url(${VolumeSvg?.src});
    background-size: cover;
  }
`;
interface IPlayPause {
  isPlaying: boolean;
}

const btnTemplate = css`
  width: 26px;
  height: 26px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const PlayPause = styled.button<IPlayPause>`
  ${btnTemplate}
  ${(props) => {
    switch (props.isPlaying) {
      case true:
        return css`
          background-image: url(${PauseCircle?.src});
        `;
      default:
        return css`
          background-image: url(${PlayCircle?.src});
        `;
    }
  }}
`;

interface ISkipBtn {
  prev: boolean;
}

export const SkipBtn = styled.button<ISkipBtn>`
  ${btnTemplate}
  ${(props) => {
    switch (props.prev) {
      case true:
        return css`
          background-image: url(${PrevSvg?.src});
        `;
      default:
        return css`
          background-image: url(${NextSvg?.src});
        `;
    }
  }}
`;

export const LikeBtn = styled.button`
  ${btnTemplate}
  margin-left: auto;
  margin-right: 50px;
  background-image: url(${LikeSvg?.src});
`;
