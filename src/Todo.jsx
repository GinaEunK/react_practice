const Todo = ({ todoprops, title, body }) => {
  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <h1>{title}</h1>
      <p>{body}</p>
      <button>삭제하기</button>
      <button>완료</button>
    </div>
  );
};

export default Todo;
