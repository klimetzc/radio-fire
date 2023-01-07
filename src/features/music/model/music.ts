import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MusicState {
  music: string;
}

const initialState: MusicState = {
  music: 'Chiquitita' || 'GHOST',
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusic: (state: MusicState, payload: PayloadAction<string>) => {
      state.music = payload.payload;
    },
  },
});

export const musicActions = musicSlice.actions;

export default musicSlice.reducer;
