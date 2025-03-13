import { useState } from "react";
function Todo({ todo }) {
  console.log(todo);
  const { title, completed, id } = todo;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div style={styles}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <h2>{title}</h2>
      <button>Edit</button>
      <button>Delete</button>
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
