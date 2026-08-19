import { useState, useEffect } from "react";
import AddTodo from "./Component/AddTodo";
import Todos from "./Component/Todos";
import { useDispatch, useSelector } from "react-redux";
import { LocalStoreTodo } from "./Reducers/todoSlice";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState(null);
  const [inputmsg, setInputMsg] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const Alltodos = JSON.parse(localStorage.getItem("AllTodos"));

    if (Alltodos && Alltodos.length > 0) {
      dispatch(LocalStoreTodo(Alltodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("AllTodos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <AddTodo
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        editId={editId}
        setEditId={setEditId}
        inputmsg={inputmsg}
        setInputMsg={setInputMsg}
      />
      <Todos
        setIsEditable={setIsEditable}
        isEditable={isEditable}
        setEditId={setEditId}
        setInputMsg={setInputMsg}
      />
    </>
  );
}

export default App;
