import React from 'react';

interface IUserPage {
  params: {
    userId: string;
  };
}

const Page = ({ params }: IUserPage) => {
  return (
    <div>
      <h1>Страница пользователя c id: {params.userId}</h1>
    </div>
  );
};

export default Page;
