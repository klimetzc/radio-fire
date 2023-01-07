import Link from 'next/link';
import React from 'react';
import TesterComponent from 'src/shared/tester';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">Патефон</h1>{' '}
      <TesterComponent />{' '}
      <Link
        className="text-blue-500 font-medium pb-4 text-5xl transition duration-300 hover:text-blue-300"
        href="/promo"
      >
        Link to landing
      </Link>
      <Link href="/albums/testAlbum">Тестовый альбом</Link>
    </div>
  );
};

export default IndexPage;
