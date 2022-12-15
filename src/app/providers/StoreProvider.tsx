'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';

interface IStoreProvider {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
