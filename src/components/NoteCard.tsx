import React from "react";
import { Note, addSelectNote } from "../context/Notes/NoteSlice";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch } from "react-redux";
interface NoteCardProps {
  note: Note;
}
const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectNote = () => {
    dispatch(addSelectNote(note));
    navigate(`/note/${note.id}`);
  };

  return (
    <div className="max-w-sm rounded  max-h-96 overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-xl cursor-pointer mb-2">
          <span className="cursor-pointer" onClick={selectNote}>
            {note.createdAt}
          </span>
        </div>
        <p className="text-gray-700 text-base">{note.date}</p>
        <p className="text-gray-700 text-base">{note.userName}</p>
      </div>
      <div className="px-2  py-2">
        <MDEditor.Markdown
          className="w-full shadow-md overflow-hidden truncate..."
          source={note.contents}
        />
      </div>
    </div>
  );
};

export default NoteCard;
