import { useState } from "react";
import { Note, createNote } from "../context/Notes/NoteSlice";
import { v4 as uuid } from "uuid";

import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const CreatedNote = () => {
  const [date, setDate] = useState("");
  const [userName, setUserName] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveToLocalStorage = () => {
    const note: Note = {
      userName: userName,
      contents: contents,
      createdAt: new Date().toDateString(),
      date: date,
      id: uuid().slice(0, 8),
    };

    const localArr = JSON.parse(
      localStorage.getItem("notes") || "[]"
    ) as Note[];

    localArr.push(note);

    localStorage.setItem("notes", JSON.stringify(localArr));
    dispatch(createNote({ note }));
    navigate("/");
  };
  return (
    <div className=" w-full mx-auto">
      <div className="mb-5 max-w-sm">
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
        >
          User Name
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder=" user name "
          id="userName"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
        >
          Date
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
          placeholder="Boyunuzu cm olarak girin"
          id="date"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5 min-w-full">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Note
        </label>
        <MDEditor value={contents} onChange={(e) => setContents(e || "")} />
      </div>

      <button
        onClick={saveToLocalStorage}
        className="text-white mt-4 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Created
      </button>

      <div className="prose mt-4 max-h-64 overflow-hidden">
        <MDEditor.Markdown source={contents} />
      </div>
    </div>
  );
};

export default CreatedNote;
