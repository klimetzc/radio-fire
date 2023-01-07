import React, { PropsWithChildren } from 'react';
import ReduxProvider from './ReduxProvider';
import SongProvider from './SongProvider';
import StyledComponentsRegistry from './StyledComponentsRegistry';

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <SongProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </SongProvider>
    </ReduxProvider>
  );
};

export default RootProvider;
