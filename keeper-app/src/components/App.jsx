import react, {useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import axios from 'axios';

export default function App() {
  const [notes, setNotes] = useState([]);
  useEffect(()=> {
    axios
      .get('http://localhost:8000/api/notes')
      .then(res => {
          setNotes(res.data.notes);
      });
  },[])
  function DeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note,index)=>{
        return index !== id;
    })
   
    })
   
  }
  return(
    <div>
     <Header />
      <CreateArea notes={notes} setNotes={setNotes}/>
        {
        notes.map((note,i) => {
          return( <Note onDelete={DeleteNote} key={i} id={i} title={note.title} content={note.content} />)
        })
        }
      <Footer />
  </div>
  )
  
}