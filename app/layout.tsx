import React from 'react';
import SongProvider from 'src/app/providers/SongProvider';
import StoreProvider from 'src/app/providers/StoreProvider';
import SearchBar from 'src/widgets/SearchBar/SearchBar';
import Sidebar from 'src/widgets/Sidebar/Sidebar';
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
          <SongProvider>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
              <Sidebar />
              <main style={{ width: '100%' }}>
                <SearchBar />
                {children}
              </main>
            </div>
          </SongProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
