import Link from 'next/link';
import React from 'react';

interface IUserPage {
  params: {
    userId: string;
  };
}

const Page = ({ params }: IUserPage) => {
  const { userId } = params;
  return (
    <div>
      <h1>Все плейлисты пользователя c id: {userId}</h1>
      <Link
        className="text-blue-500 underline"
        href={`/users/${userId}/playlists/123`}
      >
        К плейлисту
      </Link>
    </div>
  );
};

export default Page;
