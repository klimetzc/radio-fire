import React from 'react';
import WithAuth from 'src/app/providers/withAuth';
import PromoPage from 'src/pages/PromoPage/PromoPage';

const Page = () => {
  return (
    <WithAuth>
      <PromoPage />
    </WithAuth>
  );
};

export default Page;
