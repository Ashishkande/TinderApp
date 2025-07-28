import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

interface UserState {
  currentIndex: number;
  likedUsers: User[];
  passedUsers: number[];
  users: User[];
}

const initialState: UserState = {
  currentIndex: 0,
  likedUsers: [],
  passedUsers: [],
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    likeUser: (state, action: PayloadAction<User>) => {
      state.likedUsers.push(action.payload);
      state.currentIndex += 1;
    },
    passUser: (state, action: PayloadAction<number>) => {
      state.passedUsers.push(action.payload);
      state.currentIndex += 1;
    },
    undoLastAction: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        const lastUser = state.users[state.currentIndex];
        
        if (state.likedUsers.some(user => user.id === lastUser.id)) {
          state.likedUsers = state.likedUsers.filter(user => user.id !== lastUser.id);
        } else {
          state.passedUsers = state.passedUsers.filter(id => id !== lastUser.id);
        }
      }
    },
    resetState: () => initialState,
  },
});

export const { setUsers, likeUser, passUser, undoLastAction, resetState } = userSlice.actions;
export default userSlice.reducer;
