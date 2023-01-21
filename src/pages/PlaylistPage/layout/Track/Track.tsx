'use client';

import React from 'react';
import { LikeButton } from 'src/shared/ui/LikeButton/LikeButton';

import styled from 'styled-components';

export const TrackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 2fr 3fr 2fr 1fr;
  height: 33px;
  font-size: 18px;
  line-height: 22px;
  color: white;
  padding: 5px 0 0;
  border-top: 1px solid #272727;
`;

export const TrackDuration = styled.span`
  text-align: end;
  opacity: 0.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TrackDate = styled.span`
  opacity: 0.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TrackName = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TrackArtist = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TrackAlbum = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export interface ITrack {
  track: {
    id: string;
    isLiked: boolean;
    name: string;
    artist: string;
    album: string;
    addingDate: string;
    duration: string;
  };
  key?: string;
}

const Track: React.FC = () => {
  return (
    <TrackContainer>
      <LikeButton isLiked={false} />
      <TrackName>AlbumName</TrackName>
      <TrackArtist>Artist</TrackArtist>
      <TrackAlbum>Awesome Album</TrackAlbum>
      <TrackDate>5 дней назад</TrackDate>
      <TrackDuration>4:35</TrackDuration>
    </TrackContainer>
  );
};

export default Track;
