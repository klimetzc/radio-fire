import React from 'react';
import SongProvider from 'src/app/providers/SongProvider';
import StoreProvider from 'src/app/providers/StoreProvider';
import './globals.css';

interface RootLayoutInterface {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <html lang="ru">
      <head />
      <body>
        <StoreProvider>
          <SongProvider>{children}</SongProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
