import Link from 'next/link';
import React from 'react';
import TesterComponent from 'src/shared/tester';

const IndexPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>{' '}
      <TesterComponent />{' '}
      <Link
        className="text-blue-500 transition duration-300 hover:text-blue-300"
        href="/promo"
      >
        Link to landing/promo page
      </Link>
    </>
  );
};

export default IndexPage;
