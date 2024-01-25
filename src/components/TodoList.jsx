import TodoCard from "./TodoCard";

function TodoList({ todo, setTodo }) {
  /** TodoList Variables */
  const todoItemList = todo.filter((item) => !item.isDone);
  const doneItemList = todo.filter((item) => item.isDone);

  return (
    <div>
      <div className="nowWorking">
        <h3>💟 Now Working</h3>
        <hr className="hrStyle" />
        {todoItemList.length === 0 ? (
          <p>아직 등록한 todo가 없습니다.</p>
        ) : (
          <TodoCard
            todo={todoItemList}
            setTodo={setTodo}
          />
        )}
      </div>
      <div className="done">
        <h3>✅ Done</h3>
        <hr className="hrStyle" />
        {doneItemList.length === 0 ? (
          <p>아직 등록한 todo가 없습니다.</p>
        ) : (
          <TodoCard
            todo={doneItemList}
            setTodo={setTodo}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
