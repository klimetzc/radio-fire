import React from 'react';
import AudioPlayer from './AudioPlayer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import RootProvider from 'src/app/providers';
describe('<AudioPlayer />', () => {
  test('renders <AudioPlayer />', async () => {
    const comp = render(
      <RootProvider>
        <AudioPlayer />
      </RootProvider>
    );
    expect(comp.container.querySelector('#audio-player')).toBeInTheDocument();

    // const playBtn = screen.getByTestId('AudioPlayer__play-pause');
    // fireEvent.click(playBtn);
    // expect(playBtn.getAttribute('isPlaying')).toBe(true);
  });
});

export {};
