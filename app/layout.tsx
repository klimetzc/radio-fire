import React, { PropsWithChildren } from 'react';
import BodyProvider from './BodyProvider';
import './globals.css';

const RootLayout: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru">
      <head />
      <BodyProvider>{children}</BodyProvider>
    </html>
  );
};

export default RootLayout;
