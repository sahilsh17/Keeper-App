import axios from 'axios';

export function getIdFromNotes(notes,id)  {
  return  axios
    .get('http://localhost:8000/api/notes')
    .then(res => {
      const noteArray = res.data.notes;
      console.log(noteArray);
      const note = noteArray.filter(note => note.title === notes[id].title && note.content === notes[id].content);     
      return note[0].id;
    })
    .catch(error => {
      console.log(error);
    })
  }
