import React from 'react';
import AlbumPage from 'src/pages/AlbumPage/AlbumPage';
import { getTempSongs, login } from 'src/shared/api';
import AudioPlayer from 'src/widgets/AudioPlayer/AudioPlayer';

interface IAlbumPage {
  params: {
    albumId: string;
  };
}

export default async function Page({ params }: IAlbumPage) {
  const token = await login();
  const songs = await getTempSongs(token.data);

  console.log('songs:', songs);

  return (
    <div
      className="flex flex-col justify-between min-h-screen"
      style={{ minHeight: '100vh' }}
    >
      <AlbumPage list={songs} />
      <AudioPlayer />
    </div>
  );
}
