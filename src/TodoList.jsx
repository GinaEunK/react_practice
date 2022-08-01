import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const todo = { title: title, body: body };
    setTodoList([...todoList, todo]);
  };

  return (
    <div>
      <div>
        <p>제목</p>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <p>내용</p>
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></input>
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        {todoList.map((todo, index) => {
          return (
            <Todo
              key={index}
              todoprops={todo}
              title={todo.title}
              body={todo.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
