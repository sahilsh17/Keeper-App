import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  function changeHandler(e) {
    setNote({...note,[e.target.name]: e.target.value});
  }
  function handleClick(e) {
   e.preventDefault();
   
    let temp = [...props.notes];
    props.setNotes([...temp,note]);
    setNote({...note,title: "", content: ""});
  }
  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} placeholder="Title" onChange={changeHandler}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={changeHandler} />
        <Fab onClick={handleClick}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
