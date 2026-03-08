
import './App.css'
import Dashboard from './components/Dashboard'
import { NoteProvider } from './components/NoteContext'

function App() {
  

  return (
    <>
      <NoteProvider>
        <Dashboard/>
      </NoteProvider>
       
    </>
  )
}

export default App
