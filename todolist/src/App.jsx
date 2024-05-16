import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeBody = (e) => setBody(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '')
      return;

    const newTodo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setBody('');
  };

  const onDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggleHandler = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  return (
    <div className="container">
      <h1>할 일 목록</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={body}
          onChange={onChangeBody}
        />
        <button type="submit">추가하기</button>
      </form>
      <div>
        <h2>진행 중</h2>
        <ul>
          {todos.filter(todo => !todo.isDone).map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <span>{todo.body}</span>
              <button onClick={() => onToggleHandler(todo.id)}>
                완료
              </button>
              <button onClick={() => onDeleteHandler(todo.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
        <h2>완료됨</h2>
        <ul>
          {todos.filter(todo => todo.isDone).map((todo) => (
            <li key={todo.id} className="done">
              <span>{todo.title}</span>
              <span>{todo.body}</span>
              <button onClick={() => onToggleHandler(todo.id)}>
                취소
              </button>
              <button onClick={() => onDeleteHandler(todo.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
