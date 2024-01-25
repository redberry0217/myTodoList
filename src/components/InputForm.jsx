import React, { useState } from "react";

const InputForm = ({ todo, setTodo }) => {
  /** InputForm States */
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  /** Inputform variables */
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const memoChangeHandler = (event) => setMemo(event.target.value);
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!title || !memo) {
      alert("제목과 내용을 모두 입력해 주세요.");
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        memo,
        isDone: false,
      };
      setTodo([...todo, newTodo]);
      console.log(todo);
      setTitle(""); 
      setMemo("");
    }
  };

  return (
    <form className="writeBox" onSubmit={SubmitHandler}>
      <h3>제 목</h3>
      <input
        className="writeInput"
        type="text"
        value={title}
        onChange={titleChangeHandler}
        maxLength="10"
      />
      <h3>내 용</h3>
      <input
        className="writeInput"
        type="text"
        value={memo}
        onChange={memoChangeHandler}
        maxLength="19"
      />
      <button type="submit" className="button-with-click-effect">
        추가하기
      </button>
    </form>
  );
};

export default InputForm;
