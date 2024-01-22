import React, { useState } from 'react';
import Layout from 'Layout';
import TodoCard from './TodoCard';
import DoneCard from './DoneCard';
import Inputform from './InputForm';

function App() {
  const [title, setTitle] = useState("")
  const [memo, setMemo] = useState("")
  const [todo, setTodo] = useState([])
  const [done, setDone] = useState([])

  /** 글쓰기 부분 */
  const titleChangeHandler = (event) => { setTitle(event.target.value) }
  const memoChangeHandler = (event) => { setMemo(event.target.value) }
  const writeBtnHandler = () => {
    const todoData = {
      id: todo.length + 1,
      title,
      memo,
    }
    setTodo([...todo, todoData]);
    setTitle("");
    setMemo("");
  }

  /** Now Working 삭제하기 버튼 */
  const removeBtnHandler = (id) => {
    const shouldDelete = window.confirm("Todo를 삭제하시겠습니까?");

    if (shouldDelete) {
      const newTodoData = todo.filter(item => item.id !== id);
      setTodo(newTodoData);
    }
  };

  /** Done 삭제하기 버튼 */
  const DoneRemoveBtnHandler = (id) => {
    const shouldDelete = window.confirm("완료된 항목을 삭제하시겠습니까?");

    if (shouldDelete) {
      const newDoneData = done.filter(item => item.id !== id);
      setDone(newDoneData);
    }
  }
  /** Now Working 완료하기 버튼 */
  const DoneBtnHandler = (item) => {
    const newDoneData = [...done, item];
    setDone(newDoneData);

    const newTodoData = todo.filter(todoItem => todoItem.id !== item.id);
    setTodo(newTodoData);
  }
  /** Done 취소하기 버튼 */
  const undoneBtnHandler = (item) => {
    const newDoneData = done.filter(doneItem => doneItem.id !== item.id);
    setDone(newDoneData);

    const newTodoData = [...todo, item];
    setTodo(newTodoData);
  }

  return (
    <section className="section">
    <Layout>
      <Inputform title={title}
                 memo={memo}
                 titleChangeHandler={titleChangeHandler}
                 memoChangeHandler={memoChangeHandler}
                 writeBtnHandler={writeBtnHandler}
      />
      <div className="nowWorking">
        <h3>💟 Now Working</h3><hr className="hrStyle" />
        {todo.length === 0 
          ? (<p>아직 등록한 todo가 없습니다.</p>) 
          :<TodoCard todo={todo} 
                     removeBtnHandler={removeBtnHandler}
                     DoneBtnHandler={DoneBtnHandler}/>
        }
      </div>
      <div className="done">
        <h3>✅ Done</h3><hr className="hrStyle" />
        {done.length === 0
          ? (<p>아직 완료된 todo가 없습니다.</p>)
          :<DoneCard done={done} 
                     DoneRemoveBtnHandler={DoneRemoveBtnHandler} 
                     undoneBtnHandler={undoneBtnHandler}/>}
      </div>
    </Layout>
    </section>
  )
}

export default App