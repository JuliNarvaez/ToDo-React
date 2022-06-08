import "./card.scss";
import IconButton from './DeleteButton'
import formatDate from "../../Utils/dateFormatter";
import { Trash2 } from "react-feather";

function delNote(id) {
    console.log("Delete note with id: " + id);
}


export default function Card({ note }) {

    const createDate = formatDate(note.createdAt);
    const updateDate = formatDate(note.updateAt);

    return <>
        <div className="card">
            <IconButton icon={<Trash2 />} onClick={() => delNote(note.id)} />
            <div className="card_note"> <p>{note.content}</p></div>
            <div className="card_date">
                <div className="card_created"><p>Created At: {createDate}</p></div>
                {updateDate && <div className="card_updated"><p>Updated At: {updateDate}</p></div>}
            </div>

        </div>
    </>
}