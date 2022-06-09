import { useState, useContext } from 'react';
import { createNote } from '../Utils/apiRequest';
import { NotesContext } from './Provider/NotesProvider';

export default function NoteInput() {

    const [value, setValue] = useState('');
    const { getNotes } = useContext(NotesContext);

    const newNote = async () => {
        await createNote({ "content": value })
        await getNotes()

    }

    const handleChange = (e) => {
        setValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newNote();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New To Do:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}