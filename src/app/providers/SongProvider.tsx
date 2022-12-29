'use client';

import React, { createContext, useState } from 'react';
export const CurrentSong = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | []
>([]);

const SongProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<string>('Chiquitita');
  return (
    <CurrentSong.Provider value={[currentSong, setCurrentSong]}>
      {children}
    </CurrentSong.Provider>
  );
};

export default SongProvider;
