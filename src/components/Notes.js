import AddNote from "./AddNote"
import Note from "./Note"

const Notes = ({ notes, addNoteToList, removeNoteFromList }) => {
    return (
        <div className='notes'>
            {
                notes.map((note) => (
                    <Note id={note.id}
                        text={note.text}
                        date={note.date}
                        removeNoteFromList={removeNoteFromList} />
                ))
            }
            <AddNote addNoteToList={addNoteToList} />
        </div>
    )
}
export default Notes;