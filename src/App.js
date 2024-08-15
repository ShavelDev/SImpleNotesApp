import { useState} from 'react';
import './App.css';




function App() {

  const [notes, changeNotes] = useState([]);

  const addNote = () => {

    changeNotes( (prevNotes) => [...prevNotes, {title: "TITLE", noteContent: "CONTENT"}])

  }

  

  const hideForm = () => {

  }

  return (
    <div className="App">
      <nav className='navbar'>navbar
      <div className='button' onClick={addNote}> Add Note</div>
      </nav>
      <div className='mainSection'>


    <Notes notes = {notes}></Notes>

      <div className='formBox'>
      <form>
        
      </form>


      </div>

      </div>
      <footer>footer</footer>
    </div>
  );
}

function Notes(props){

  

 const notesJSX = props.notes.map(note => (<Note noteContent = {note.noteContent} title = {note.title} ></Note>))

  return(

    <div className='NotesBox'>
      {notesJSX}
    </div>

  );
}

function Note(props){

  return(
    <div className='Note'>
      <p>{props.title}</p>  
      <p>props.noteContent</p>
    </div>
  );

}

export default App;
