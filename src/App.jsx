import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Inputform from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    console.log('todo', todo)
  }, [todo])

  return (
    <section className="section">
      <Layout />
      <Inputform
        todo={todo}
        setTodo={setTodo}/>
      <TodoList
        todo={todo}
        setTodo={setTodo}
      />
    </section>
  );
}

export default App;
