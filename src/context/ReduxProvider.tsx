import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer, { Note } from "./Notes/NoteSlice";

interface ReduxProviderProps {
  children: React.ReactElement<any>;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const localArr = JSON.parse(
      localStorage.getItem("notes") || "[]"
    ) as Note[];
    if (localArr.length > 0) {
      setNotes(localArr);
    }
  }, []);

  const reducer = {
    app: appReducer,
  };

  const store = configureStore({
    reducer,
    preloadedState: {
      app: {
        notes: notes,
        selectNote: undefined,
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
