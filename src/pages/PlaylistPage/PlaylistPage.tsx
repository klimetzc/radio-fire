'use client';

import React from 'react';
import calendar from '../../shared/assets/icons/calend.svg';
import clock from '../../shared/assets/icons/clock.svg';
import { ITrack } from './layout/Track/Track';
import Track from './layout/Track/Track';
import { LikeButton } from 'src/shared/ui/LikeButton/LikeButton';

import styled from 'styled-components';
import Image from 'next/image';
export const Playlist = styled.div`
  font-family: 'Inter', Arial, sans-serif;
  padding: 30px;
  background: #161616;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
`;

export const PlaylistImage = styled.div<{ imageUrl: string }>`
  background-image: url('${(props) => props.imageUrl}');
  min-width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

export const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const TranslucentText = styled.span`
  opacity: 0.6;
`;

export const PlaylistName = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  margin: 15px 0;
`;

export const Box = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const SubscribesInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
`;

export const SubscribeText = styled.span`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: right;
  opacity: 0.6;
`;

export const SubscribeCount = styled.span`
  margin-top: 18px;
  text-align: right;
  font-size: 20px;
  line-height: 24px;
`;

export const Tracklist = styled.div`
  display: flex;
  flex-direction: column;
  background: #161616;
`;

export const Info = styled.div`
  padding: 30px 0 0;
  margin: 0 0 10px;
  display: grid;
  grid-template-columns: 1fr 10fr 2fr 3fr 2fr 1fr;
  grid-template-areas: '. name author album adding-time duration';
  opacity: 0.5;
`;

export const TrackName = styled.span`
  grid-area: name;
`;

export const Author = styled.span`
  grid-area: author;
`;

export const Album = styled.span`
  grid-area: album;
`;

export const AddingTime = styled(Image)`
  grid-area: adding-time;
`;

export const Duration = styled(Image)`
  grid-area: duration;
  display: flex;
  justify-self: end;
`;

export interface IPlaylistData {
  data: {
    id: string;
    name: string;
    author: string;
    numberOfTracks: number;
    duration: string;
    isLiked: boolean;
    subscribers: number;
    trackList?: ITrack[];
  };
}

const PlaylistPage: React.FC = () => {
  return (
    <Playlist>
      <Header>
        <PlaylistImage imageUrl="https://kartinkin.net/uploads/posts/2022-12/1670315302_4-kartinkin-net-p-kartinki-dlya-pleilista-vkontakte-4.jpg" />
        <PlaylistInfo>
          <h1>Плейлист</h1>
          <PlaylistName>Любители Абоб</PlaylistName>
          <p>
            <TranslucentText>от</TranslucentText> Максим
          </p>
          <Box>
            <TranslucentText>55 треков, 5ч. 30 мин.</TranslucentText>
            <LikeButton isLiked={false} size="25" />
          </Box>
        </PlaylistInfo>
        <SubscribesInfo>
          <SubscribeText>подписчики</SubscribeText>
          <SubscribeCount>5 300</SubscribeCount>
        </SubscribesInfo>
      </Header>
      <Tracklist>
        <Info>
          <TrackName>НАЗВАНИЕ</TrackName>
          <Author>АРТИСТ</Author>
          <Album>АЛЬБОМ</Album>
          <AddingTime src={calendar} alt="иконка календаря" />
          <Duration src={clock} alt="иконка часов" />
        </Info>
        <Track />
        <Track />
      </Tracklist>
    </Playlist>
  );
};

export default PlaylistPage;
