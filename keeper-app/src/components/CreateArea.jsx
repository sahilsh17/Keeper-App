import React, {useState} from "react";
function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  function changeHandler(e) {
    setNote({...note,[e.target.name]: e.target.value});
  }
  function handleClick(e) {
   e.preventDefault();
   console.log(props.notes);
    let temp = [...props.notes];
    props.setNotes([...temp,note]);
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={changeHandler}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={changeHandler} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
