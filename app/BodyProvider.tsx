import React from 'react';
import RootProvider from 'src/app/providers';
import SearchBar from 'src/widgets/SearchBar/SearchBar';
import Sidebar from 'src/widgets/Sidebar/Sidebar';

interface IBodyProvider {
  children: React.ReactNode;
}

const BodyContent: React.FC<IBodyProvider> = ({ children }) => {
  return (
    <RootProvider>
      <body>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
          <Sidebar />
          <main style={{ width: '100%' }}>
            <SearchBar />
            {children}
          </main>
        </div>
      </body>
    </RootProvider>
  );
};

export default BodyContent;
