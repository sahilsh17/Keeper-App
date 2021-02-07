import react, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import {notes} from '../notes.js';
import CreateArea from './CreateArea';

export default function App() {
  const [notes, setNotes] = useState([]);
  return(
    <div>
     <Header />
      <CreateArea notes={notes} setNotes={setNotes}/>
        {
        notes.map((note,i) => {
          return( <Note key={i} title={note.title} content={note.content} />)
        })
        }
      <Footer />
  </div>
  )
  
}