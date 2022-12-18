import React from 'react';
import mockAlbum from '../../shared/assets/images/album.png';
import likeOutline from '../../shared/assets/icons/like_outline.svg';
import Image from 'next/image';
import Song, { ISong } from './layout/Song';

const mockSongs: Partial<ISong>[] = [
  {
    data: {
      id: '1',
      title: 'Профессионал',
      auditions: '1 130 300',
      duration: '1:40',
      explicit: false,
    },
  },
  {
    data: {
      id: '2',
      title: 'Люди',
      auditions: '640 784',
      duration: '2:15',
      explicit: true,
    },
  },
  {
    data: {
      id: '3',
      title: 'Альтернатива',
      auditions: '250 650',
      duration: '3:02',
      explicit: false,
    },
  },
];

const AlbumPage = () => {
  return (
    <div className="pt-[100px] flex flex-col items-center">
      <div className="w-[800px]">
        <div className="album-head flex gap-5 mb-8 w-full">
          <Image
            src={mockAlbum}
            alt="Album image"
            className="w-[200px] h-[200px] rounded-xl block"
          />
          <div className="flex flex-col relative w-full">
            <p className="text-xl mb-4">Альбом</p>
            <h2 className="font-extrabold text-5xl text-white uppercase">
              Человеко-часы
            </h2>
            <p className="text-zinc-500 mt-auto mb-3 text-xl">
              от <span className="text-white">Дайте танк(!)</span>
            </p>
            <p className="text-zinc-500 text-xl">2020 • 55 треков, 30 мин.</p>
            <button
              type="button"
              className="w-[40px] h-[40px] border-none absolute bottom-0 right-0"
            >
              <Image
                src={likeOutline}
                alt="like"
                className="w-[40px] h-[40px]"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          {mockSongs.map((item, index) => (
            <Song key={item?.data?.id} index={index + 1} data={item?.data!} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
