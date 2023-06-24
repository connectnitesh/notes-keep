import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded,setisExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpand(){
    setisExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab  onClick={submitNote}>
<<<<<<< HEAD
            <AddIcon />
          </Fab> 
=======
            <AddIcon className={"customclass"}/>
            </Fab> 
>>>>>>> efd236931db00b5982e6884bc28145af6b4ca1ac
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
