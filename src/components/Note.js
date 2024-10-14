import { MdDeleteForever } from 'react-icons/md'
const Note = ({ id, text, date, removeNoteFromList }) => {

    return (
        <div className='note'>
            <span className='note-details'>{text}</span>
            <div className='note-footer'>
                <small className='note-date'>{date}</small>
                <MdDeleteForever className='delete-note'
                    size='1.5rem'
                    onClick={()=>removeNoteFromList(id)} />
            </div>
        </div>
    )
}

export default Note