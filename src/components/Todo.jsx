
import { useState } from "react";

function Todo({ todo,dispatch }) {
  console.log(todo);

  const { title, completed, id } = todo;
  const [isChecked, setIsChecked] = useState(completed);
  const [editedTitle,setEditedTitle] = useState(title);
  const[isEditing, setIsEditing] = useState(false)
  //toggling the completion status
  const handleCheckboxChange = (e)=>{
    setIsChecked(e.target.value);
    dispatch({
      type: "toogle_todo",
      payload: id,
    });
  };

  //handling edited todo
  const handleEditChange= ()=>{
    dispatch({
      type: "edit_todo",
      payload: {id,title:editedTitle}
    })
    setIsEditing(false);
  };


  return (
    <div style={styles}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {
        isEditing ? (
          <input
            type = "text"
            value = {editedTitle}
            onChange = {(e)=>setEditedTitle(e.target.value)}
            />
        ):(
          <h2 style={{textDecoration: isChecked ? "line-through":"none"}}> {title}</h2>
        )
      }
     
      <button 
        onClick={()=>setIsEditing(true)}>
        Edit
      </button>

      <button
        disabled={!isChecked}
        onClick={()=>dispatch({type: "delete_todo", payload: id})}>
        Delete
      </button>
      {
        isEditing && (
          <button onClick={handleEditChange}>Save</button>
        )
      }
    </div>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
  // backgroundColor: 'grey'
};

export default Todo;
