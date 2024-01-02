import { useState } from "react";
import { useToDoDispatch } from "../contexts/ToDoContext";

const Item = ({ todo }) => {
  const dispatch = useToDoDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const complete = (todo) => {
    dispatch({ type: "delete", todo: todo });
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditBlur = () => {
    setIsEditing(false);
  };

  //  const handleKeyDown = (e) => {
  //    if (e.key === "Enter") {
  //      setIsEditing(false);
  //    }
  //  };
  const handleEditConfirm = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEditContent = (e, todo) => {
    dispatch({ type: "edit", todo: todo });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>

      <form onSubmit={handleEditConfirm} style={{ display: "inline" }}>
        {isEditing ? (
          <input
            type="text"
            value={todo.content}
            onChange={(e) => {
              handleEditContent(e, todo);
            }}
            onBlur={handleEditBlur}
            //            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
