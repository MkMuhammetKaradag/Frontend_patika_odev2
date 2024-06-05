import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import NotesAppReducer from "./Notes/NoteSlice";

const store = configureStore({
  reducer: {
    app: NotesAppReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
