import React from 'react';
import SongProvider from 'src/app/providers/SongProvider';
import AudioPlayer from './AudioPlayer';
import { render } from '@testing-library/react';

describe('<AudioPlayer />', () => {
  test('renders <AudioPlayer />', async () => {
    const comp = render(
      <SongProvider>
        <AudioPlayer />
      </SongProvider>
    );
    expect(comp.container.querySelector('#audio-player')).toBeInTheDocument();
  });
});

export {};
