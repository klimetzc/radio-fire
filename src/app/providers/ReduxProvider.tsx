'use client';

import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
