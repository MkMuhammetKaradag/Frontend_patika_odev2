import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  userName: string;
  createdAt: string;
  updateAt?: string;
  date: string;
  contents: string;
}

export interface NoteAppType {
  notes: Array<Note>;
  selectNote: Note | undefined;
}

const initialState: NoteAppType = {
  notes: [],
  selectNote: undefined,
};

export const NoteAppSlice = createSlice({
  name: "NoteApp",
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<{ note: Note }>) => {
      state.notes.push({ ...action.payload.note });
    },
    changeNote: (state, action: PayloadAction<Note>) => {
      const isNoteIndex = state.notes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (isNoteIndex > -1) {
        state.notes[isNoteIndex] = action.payload;
      }
    },
    addSelectNote: (state, action: PayloadAction<Note>) => {
      console.log(action.payload, "reducers içi");
      state.selectNote = action.payload;
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const isNoteIndex = state.notes.findIndex(
        (item) => item.id === action.payload
      );
      if (isNoteIndex > -1) {
        state.notes.splice(isNoteIndex, 1);
      }
    },
  },
});

export const { createNote, addSelectNote, changeNote, deleteNote } =
  NoteAppSlice.actions;
export default NoteAppSlice.reducer;
