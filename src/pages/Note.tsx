import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Note as NoteType,
  changeNote,
  deleteNote,
} from "../context/Notes/NoteSlice";
import { useAppSelector } from "../context/hooks";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch } from "react-redux";

const Note = () => {
  const [note, setNote] = useState<NoteType | undefined>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectNote = useAppSelector((s) => s.app.selectNote);
  const [contents, setContents] = useState("");
  useEffect(() => {
    if (selectNote) {
      setNote(selectNote);
      setContents(selectNote.contents);
    }
  }, [selectNote]);

  const changeToNote = () => {
    if (note) {
      dispatch(
        changeNote({
          ...note,
          updateAt: new Date().toDateString(),
          contents,
        })
      );
    }
  };
  const deleteToNotes = () => {
    if (note) {
      dispatch(deleteNote(note.id));
      navigate("/");
    }
  };

  return (
    <div className="w-full  mt-4 border-gray-100 shadow-lg rounded-md p-4 border-2">
      <div className="text-lg text-gray-600">
        <span className="text-xl text-gray-800">Date:</span> {note?.date}
      </div>
      <div>createdAt: {note?.date}</div>
      <div>User: {note?.userName}</div>
      {note?.updateAt && <div>updateAt: {note?.date}</div>}

      <MDEditor value={contents} onChange={(e) => setContents(e || "")} />

      <button
        onClick={changeToNote}
        className="text-white mt-4 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Cahnge
      </button>
      <button
        onClick={deleteToNotes}
        className="text-white mt-4 ml-5 bg-rose-200 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
