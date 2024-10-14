import { useState } from "react"

const AddNote = ({ addNoteToList }) => {
    const textHandler = (event) => {
        updateText(event.target.value)
    }

    const addNote = (event) => {
        var temp = text.trim()
        if (temp.length > 0) {
            addNoteToList(temp)
            updateText('')
            var textarea = document.getElementById('textarea')
            textarea.focus()
        } else {
            alert('Please add something to save')
        }
    }

    const [text, updateText] = useState('')
    return ( 
        <div className = 'note add-note' >
        <textarea className = 'add-note-text'
        rows = '10'
        id='textarea'
        cols = '25'
        autoFocus='true'
        placeholder = 'Type here to add a new note...'
        value = { text }
        onChange = { textHandler } > 
        </textarea> 
        <button className = 'note-footer save-button'
        onClick = { addNote } > Save < /button> 
        </div>
    )
}

export default AddNote