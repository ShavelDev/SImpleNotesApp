import { useState} from 'react';
import './App.css';





function App() {

  const [notes, changeNotes] = useState([]);
  const [formHidden, setHidden] = useState(false);
  const [inputTitle, setTitle] = useState("");
  const [inputNoteContent, setNoteContent] = useState("");

  const addNote = () => {

    changeNotes( (prevNotes) => [...prevNotes, {title: "TITLE", noteContent: "CONTENT"}])

  }

  


  const hideForm = () => {
    setHidden((prevValue => !formHidden))
    
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    changeNotes( (prevNotes) => [...prevNotes, {title: inputTitle, noteContent: inputNoteContent}])
    setTitle("")
    setNoteContent("")
  }

  return (
    <div className="App">
      <nav className='navbar'>navbar
      <div className='button' onClick={addNote}> Add Note</div>
      </nav>
      <div className='mainSection'>


        <Notes notes = {notes}></Notes>

        <div className = {`FormBox ${formHidden ? 'FormBox-hidden' : 'FormBox-displayed'}`}>
          <div className= 'FormBoxHider' onClick={hideForm}> 
          
          </div>
          <form onSubmit={handleSumbit}>

            <input type = "text"
             value = {inputTitle} 
             required
             onChange= {(e) => setTitle(e.target.value)} />

             <textarea
              type = "text"
              value={inputNoteContent}
              required
              onChange={(e)=> setNoteContent(e.target.value)}
             
             />

             <button
              type='submit'
             >
              Submit
             </button>
            
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
      <p>{props.noteContent}</p>
    </div>
  );

}

export default App;
