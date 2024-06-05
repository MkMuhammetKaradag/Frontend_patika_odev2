import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Footer from "./components/Footer";
import Note from "./pages/Note";

const App = () => {
  return (
    <div className="relative    min-h-screen ">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>

          <Route path="/createNote" element={<CreateNote></CreateNote>}></Route>
          <Route path="/note/:id" element={<Note></Note>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
