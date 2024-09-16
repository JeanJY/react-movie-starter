import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState("");
  const [todosB, setTodosB] = useState([]);
  const onChange = (e) => {
    setTodos(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todos === "") {
      return;
    }
    setTodos("");
    setTodosB((prevArray) => [...prevArray, todos]);
  };
  console.log(todosB);

  return (
    <div>
      <h1>My To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todos}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {todosB
          .slice()
          .reverse()
          .map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
