'use client';
import 'client-only';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IWithAuth {
  children: React.ReactNode;
}

const WithAuth: React.FC<IWithAuth> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('user')) router.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default WithAuth;
