import './App.css'
import List from './Components/List'
import NoteInput from './Components/NoteInput'
import NotesProvider from './Components/Provider/NotesProvider'

function App() {

  return (

    <div className="App">
      <NotesProvider>
        <NoteInput />
        <List />
      </NotesProvider>
    </div>
  )
}

export default App
