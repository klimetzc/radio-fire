'use client';

import React, { useEffect, useState, useContext } from 'react';
import { CurrentSong } from 'src/app/providers/SongProvider';
import * as S from './AudioPlayer.styles';
import mockImage from 'src/shared/assets/images/album.png';

const toMMSS = (seconds: number): string => {
  if (!seconds) return '00:00';
  return new Date(+seconds.toFixed(0) * 1000).toISOString().substring(14, 19);
};

interface KeydownEvent extends Event {
  code: string;
}

const AudioPlayer = () => {
  const [song, setSong] = useContext(CurrentSong);
  const [audio, setAudio] = useState<HTMLAudioElement>(
    // new Audio(`http://213.234.25.62:10050/api/v1/audio/${song}`)
    new Audio('http://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3')
  );
  const [currentTime, setCurrentTime] = useState<string>('0');
  const [volume, setVolume] = useState<number>(audio?.volume || 1);
  const [playing, setPlaying] = useState<boolean>(false);

  const handleTimeupdate = () => {
    setCurrentTime(`${audio.currentTime}`);
  };
  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };

  const handleKeydown = (e: KeydownEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (!audio.paused) {
        audio.pause();
        setPlaying(false);
      } else {
        setPlaying(true);
        audio.play();
      }
    }
  };

  useEffect(() => {
    // setAudio(new Audio(`http://213.234.25.62:10050/api/v1/audio/${song}`));
    document.addEventListener('keydown', handleKeydown);
    audio.addEventListener('timeupdate', handleTimeupdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      audio.removeEventListener('timeupdate', handleTimeupdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [song]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  return (
    <S.AudioPlayer>
      <S.AudioTrackBackground />
      <S.AudioTrack percent={(+currentTime * 100) / audio.duration} />
      <S.CurrentDuration>{toMMSS(+currentTime)}</S.CurrentDuration>
      <S.TotalDuration>{toMMSS(audio.duration) || 0}</S.TotalDuration>
      <S.SongInfo className="flex flex-col">
        <S.SongImage src={mockImage} alt="Обложка песни" />
        <div>
          <S.ArtistName className="text-white font-medium">
            Исполнитель
          </S.ArtistName>
          <S.SongTitle className="text-zinc-500">Название</S.SongTitle>
        </div>
      </S.SongInfo>

      <S.PlayPause
        isPlaying={playing}
        onClick={() => {
          if (playing) {
            audio.pause();
          } else {
            audio.play();
          }
        }}
      />
      <S.VolumeControl
        type="range"
        defaultValue={audio?.volume || 1}
        min={0}
        max={1}
        step={0.01}
        onChange={(e) => {
          setVolume(+e.target.value);
        }}
      />
    </S.AudioPlayer>
  );
};

export default AudioPlayer;
