import { useState } from "react";
import Notes from "./components/Notes";
import { nanoid } from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const addNoteToList = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    updateNotes(newNotes)
  }

  const removeNoteFromList = (id) => {
    const newNotes = notes.filter((note) => note.id != id)
    updateNotes(newNotes)
  }

  const [notes, updateNotes] = useState([]);

  const filterNotes = (text) => {
    updateSearchText(text)
  }

  const [searchText, updateSearchText] = useState('')

  return (
    <div className="app" id='app'>
      <Header />
      <Search filterNotes={filterNotes} />
      <Notes notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText.toLowerCase()))}
        addNoteToList={addNoteToList}
        removeNoteFromList={removeNoteFromList} />
    </div>
  );
}

export default App;
