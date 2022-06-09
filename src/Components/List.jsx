import { useContext } from "react"
import Card from "./Card/Card"
import { NotesContext } from "./Provider/NotesProvider"

export default function List() {

    const { notes, isLoading } = useContext(NotesContext);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {notes.map((note) =>
                <Card note={note} key={note.id} />
            )}
        </div>
    )
}

