import { createContext, useState, useEffect } from "react";
import { getNote } from "../../Utils/apiRequest";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNotes = async () => {
        try {
            const data = await getNote();
            setNotes(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <NotesContext.Provider value={{ notes, isLoading, getNotes }}>
            {children}
        </NotesContext.Provider>
    )

}