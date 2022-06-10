import { useContext, useState } from "react";
import "./card.scss";
import IconButton from './IconButton'
import formatDate from "../../Utils/dateFormatter";
import { Calendar, Trash2, Edit, RefreshCw } from "react-feather";
import { deleteNote } from "../../Utils/apiRequest";
import { NotesContext } from "../Provider/NotesProvider";
import NoteInput from "../NoteInput";

export default function Card({ note }) {

    const isUpdated = note.createdAt === note.updatedAt;
    const createDate = formatDate(note.createdAt);
    const updateDate = formatDate(note.updatedAt);
    const [isEditing, setIsEditing] = useState(false);

    const { getNotes } = useContext(NotesContext);

    function delNote(id) {
        return async () => {
            console.log("Delete note with id: " + id);
            await deleteNote(id);
            await getNotes();
        }
    }

    function editNote() {
        setIsEditing(!isEditing);
    }

    return (
        <div className="card">
            <div className="card_icons">
                <IconButton icon={<Edit color="darkblue" size={16} />} onClick={editNote} />
                <IconButton icon={<Trash2 color="salmon" size={16} />} onClick={delNote(note.id)} />
            </div>
            {isEditing ? <NoteInput note={note} isEditing={isEditing} onUpdate={() => setIsEditing(false)} /> : <div className="card_note"> <p>{note.content}</p></div>}
            <div className="card_date">
                <div className="card_created"><Calendar size={16} /><p>{createDate}</p></div>
                {!isUpdated && <div className="card_updated"><RefreshCw size={16} /><p>{updateDate}</p></div>}
            </div>
        </div>
    )
}