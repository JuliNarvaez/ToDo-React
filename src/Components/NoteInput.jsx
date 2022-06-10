import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { createNote } from '../Utils/apiRequest';
import { NotesContext } from './Provider/NotesProvider';
import { updateNote } from '../Utils/apiRequest';

export default function NoteInput({ note: { id, content } = {}, isEditing = false, onUpdate = () => { } }) {

    const [value, setValue] = useState("");
    const { getNotes } = useContext(NotesContext);

    useEffect(() => {
        if (!value && content)
            setValue(content);
    }, [content])

    const newNote = async () => {
        if (isEditing) {
            await updateNote({ id, value })
            onUpdate();
        } else {
            await createNote(value)
        }
        await getNotes()
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        if (!value) return;
        e.preventDefault();
        newNote();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type="submit" value="Add Task" disabled={Boolean(!value)} />
        </form>
    )
}