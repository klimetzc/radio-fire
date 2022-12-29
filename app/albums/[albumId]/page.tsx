import React from 'react';
import AlbumPage from 'src/pages/AlbumPage/AlbumPage';
import { getTempSongs } from 'src/shared/api';
import AudioPlayer from 'src/widgets/AudioPlayer/AudioPlayer';

interface IAlbumPage {
  params: {
    albumId: string;
  };
}

export default async function Page({ params }: IAlbumPage) {
  const songs = await getTempSongs();

  return (
    <div>
      <AlbumPage list={songs} />
      <AudioPlayer />
    </div>
  );
}
