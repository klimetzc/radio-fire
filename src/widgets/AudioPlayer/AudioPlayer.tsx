'use client';
import React, { useEffect, useState, useRef } from 'react';

const AudioPlayer = () => {
  // const actx = new AudioContext();
  const roomConnected = false;
  const [audio, setAudio] = useState('');
  const [audioElem, setAudioElem] = useState(
    new Audio('http://213.234.25.62:10050/api/v1/audio/play')
  );
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  // const [audioRed] = useState(audioElem);

  const refreshAudio = () => {
    // audioElem.pause();
    // setAudioElem(new Audio('http://213.234.25.62:10050/api/v1/audio/play'));
    // setPlaying(true);
    // audioElem.removeAttribute('src');
    // audioElem.src = 'http://213.234.25.62:10050/api/v1/audio/play';
    // audioElem.play();
    console.log('here');
    audioRef.current?.removeAttribute('src');
    audioRef.current!.src = 'http://213.234.25.62:10050/api/v1/audio/play';
    audioRef.current?.play();
  };

  const handleEnded = () => {
    console.log('audio ended');
  };

  // const fetchMusic = () => {
  //   console.log('working fetch music');
  //   fetch('http://213.234.25.62:10050/api/v1/audio/play')
  //     .then((res) => {
  //       console.log(res);
  //       return res.arrayBuffer();
  //     })
  //     .then((res) => {
  //       return actx.decodeAudioData(res);
  //     })
  //     .then((decodedAudio) => {
  //       const playSound = actx.createBufferSource();
  //       playSound.buffer = decodedAudio;
  //       playSound.connect(actx.destination);
  //       playSound.start(actx.currentTime);
  //     });
  // };

  useEffect(() => {
    // fetchMusic();
    // audioElem.addEventListener('');
    // audioElem.addEventListener('ended', refreshAudio);
    fetch('http://213.234.25.62:10050/api/v1/audio/all').then((res) => {
      console.log('res: ', res);
    });
  }, []);

  useEffect(() => {
    if (playing) audioElem.play();
  }, [audioElem, playing]);

  return (
    <div className="border-red-600 w-full bg-neutral-800 bg-opacity-90 backdrop-blur-md fixed bottom-0 z-50 flex items-center px-5 py-2 gap-1">
      <div className="flex flex-col">
        <p className="text-white font-medium">Исполнитель</p>
        <p className="text-zinc-500">Название</p>
      </div>
      <button
        type="button"
        onClick={() => {
          console.log(audio);
          refreshAudio();
        }}
        className="bg-blue-700 rounded-md p-1"
      >
        fetch song
      </button>
      <audio
        onEnded={handleEnded}
        src="http://213.234.25.62:10050/api/v1/audio/play"
        controls
        ref={audioRef}
      >
        Ваш браузер не поддерживает встроенное аудио.
      </audio>
      <div className="w-10">
        Duration {`${playing ? audioElem.duration : 'not playing'}`}
      </div>
    </div>
  );
};

export default AudioPlayer;
