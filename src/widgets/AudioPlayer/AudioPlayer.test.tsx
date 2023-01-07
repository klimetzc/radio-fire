import React from 'react';
import SongProvider from 'src/app/providers/SongProvider';
import AudioPlayer from './AudioPlayer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';

describe('<AudioPlayer />', () => {
  test('renders <AudioPlayer />', async () => {
    const comp = render(
      <Provider store={store}>
        <SongProvider>
          <AudioPlayer />
        </SongProvider>
      </Provider>
    );
    expect(comp.container.querySelector('#audio-player')).toBeInTheDocument();
  });
});

export {};
