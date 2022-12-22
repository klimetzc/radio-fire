import React from 'react';
import AlbumPage from 'src/pages/AlbumPage/AlbumPage';
import AudioPlayer from 'src/widgets/AudioPlayer/AudioPlayer';

interface IAlbumPage {
  params: {
    albumId: string;
  };
}

const Page: React.FC<IAlbumPage> = ({ params }) => {
  return (
    <div>
      page id = {params.albumId}
      <AlbumPage />
      <AudioPlayer />
    </div>
  );
};

export default Page;
