import React from 'react';
import mockAlbum from '../../shared/assets/images/album.png';
import likeOutline from '../../shared/assets/icons/like_outline.svg';
import Image from 'next/image';
import Song from './layout/Song';

let songId = 1;

interface IAlbumPage {
  list: string[];
}

const AlbumPage: React.FC<IAlbumPage> = ({ list }) => {
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
          {list.map((item, index) => (
            <Song
              key={++songId}
              index={index + 1}
              data={{
                id: `${songId}`,
                title: item,
                auditions: '300 000',
                duration: '1:40',
                explicit: Math.random() < 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
