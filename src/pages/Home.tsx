import { useAppSelector } from "../context/hooks";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const notes = useAppSelector((s) => s.app.notes);
  console.log(notes);
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-4">
        {notes.map((item, index) => (
          <NoteCard note={item} key={index}></NoteCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
