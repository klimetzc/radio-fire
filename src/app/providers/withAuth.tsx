'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface IWithAuth {
  children: React.ReactNode;
}

const WithAuth: React.FC<IWithAuth> = ({ children }) => {
  const router = useRouter();
  if (!localStorage.getItem('user')) router.push('/login');
  return <>{children}</>;
};

export default WithAuth;
