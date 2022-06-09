const baseUrl = 'https://mentorship-react-api.herokuapp.com/notes/';

export async function getNote() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createNote(body) {
    console.log(body);
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const notes = response.json()
        return notes;
    } catch (error) {
        console.error(error.message);
    }
}

export async function updateNote(body, id) {
    try {
        const response = await fetch(baseUrl + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body
            })
        })
        const notes = response.json()
        return notes;
    } catch (error) {
        console.error(error.message);
    }
}

export async function deleteNote(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}
