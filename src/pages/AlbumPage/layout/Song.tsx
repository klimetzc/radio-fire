import React from 'react';
import Image from 'next/image';
import likeOutlined from '../../../shared/assets/icons/like_outline.svg';

export interface ISong {
  index: number;
  data: {
    id: string;
    title: string;
    auditions: string;
    duration: string;
    explicit: boolean;
  };
}

const Song: React.FC<ISong> = ({ index, data }) => {
  return (
    <div className="flex w-full items-center pt-2 pb-2 text-lg">
      <p className="mr-[27px] w-2 font-medium">{index}</p>
      <button type="button" className="w-[20px] h-[20px] mr-[20px]">
        <Image src={likeOutlined} alt="like" />
      </button>
      <p className="font-medium mr-5">{data?.title || 'По умполчанию'}</p>
      {data?.explicit ? (
        <p className="flex flex-col items-center justify-center w-5 h-5 rounded-sm border border-zinc-700 text-zinc-700 uppercase font-medium text-sm  select-none">
          E
        </p>
      ) : null}
      <p className="ml-auto mr-[50px] text-zinc-500">
        {data?.auditions || '0'}
      </p>
      <p className="text-zinc-300">{data?.duration || '0:0'}</p>
    </div>
  );
};

export default Song;
