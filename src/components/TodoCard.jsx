function TodoCard({ todo, setTodo }) {
  /** when Btn삭제하기 clicked */
  const removeBtnHandler = (id) => {
    const shouldDelete = window.confirm("Todo를 삭제하시겠습니까?");

    if (shouldDelete) {
      const newTodoData = todo.filter((item) => item.id !== id);
      setTodo(newTodoData);
    }
  };

  /** when Btn 완료하기 clicked */
  const DoneBtnHandler = (item) => {
    setTodo(function (prev) {
      return prev.map((todoItem) =>
        todoItem.id === item.id ? { ...todoItem, isDone: true } : todoItem
      );
    });
  };

    /** when Btn 취소하기 clicked */
  const undoneBtnHandler = (item) => {
    setTodo(function (prev) {
      return prev.map((todoItem) => 
        todoItem.id === item.id ? { ...todoItem, isDone: false } : todoItem
      );
    });
  }

  return (
    <div className="cardList">
      {todo.map((item) => {
        return (
          <div className="todoCard" key={item.id}>
            <span className="showTitle">{item.title}</span>
            <span className="showMemo">{item.memo}</span>
            <div className="btns">
              <button
                onClick={() => removeBtnHandler(item.id)}
                className="button-with-click-effect"
              >
                삭제하기
              </button>
              <button
                onClick={() => {
                  if (item.isDone) {
                    undoneBtnHandler(item);
                  } else {
                    DoneBtnHandler(item);
                  }
                }}
                className="button-with-click-effect"
              >
                {item.isDone ? "취소하기" : "완료하기"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCard;
