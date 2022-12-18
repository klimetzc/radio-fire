import React from 'react';
import AlbumPage from 'src/pages/AlbumPage/AlbumPage';

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
    </div>
  );
};

export default Page;