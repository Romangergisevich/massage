import { createSlice } from '@reduxjs/toolkit';

export interface MobileNavSliceType {
  value: boolean;
}

const initialState: MobileNavSliceType = {
  value: false,
};

export const MobileNavSlice = createSlice({
  name: 'MobileNav',
  initialState,
  reducers: {
    closeNav: (state) => {
      state.value = false;
    },
    openNav: (state) => {
      state.value = true;
    },
  },
});

export const { openNav, closeNav } = MobileNavSlice.actions;
export default MobileNavSlice.reducer;
