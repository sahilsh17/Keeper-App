import react from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
export default function Note(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onDelete(props.id);
  }
  return(
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  )
}