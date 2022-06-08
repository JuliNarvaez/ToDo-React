import { useEffect, useState } from "react"
import { getNote } from "../Utils/apiRequest"
import Card from "./Card/Card"

export default function List() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = async () => {
            const data = await getNote();
            setNotes(data);
        }
        getNotes()
    }, [])

    return (
        notes.map((note) =>
            <Card note={note} key={note.id} />
        )
    )
}

