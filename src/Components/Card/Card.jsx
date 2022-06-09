import "./card.scss";
import IconButton from './IconButton'
import formatDate from "../../Utils/dateFormatter";
import { Edit2, Trash2 } from "react-feather";

function delNote(id) {
    return () => {
        console.log("Delete note with id: " + id);
    }
}

function editNote(id) {
    return () => {
        console.log("Edit note with id: " + id);
    }
}

export default function Card({ note }) {

    const createDate = formatDate(note.createdAt);
    const updateDate = formatDate(note.updateAt);

    return <>
        <div className="card">
            <div className="card_icons">
                <IconButton icon={<Edit2 color="darkblue" size={16} />} onClick={editNote(note.id)} />
                <IconButton icon={<Trash2 color="salmon" size={16} />} onClick={delNote(note.id)} />
            </div>
            <div className="card_note"> <p>{note.content}</p></div>
            <div className="card_date">
                <div className="card_created"><p>Created At: {createDate}</p></div>
                {updateDate && <div className="card_updated"><p>Updated At: {updateDate}</p></div>}
            </div>

        </div>
    </>
}