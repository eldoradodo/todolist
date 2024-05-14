import { useState } from 'react'
import './App.css'

function App() {
  const initialState = [
    { id: 1, title: "John", body: 20 },
    { id: 2, title: "Doe", body: 21 },
  ];
  const [users, setUsers] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    // 제목과 나이 모두를 입력 받기.
    if (!title || !body) {
      alert("이름과 나이를 모두 입력하세요.");
      return;
    }

    //사용자 리스트 상태를 업데이트. 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용.
    setUsers([...users, { id: Date.now(), title, body }]);
    // 입력 필드 초기화
    settitle("");
    setbody("");
  };

  const removeUser = (id) => {
    // filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="제목을 입력하세요." value={title} onChange={(e) => settitle(e.target.value)} />
        <input type="number" placeholder="내용을 입력하세요" value={body} onChange={(e) => setbody(e.target.value)} />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {users.map(user => (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center' }}>
            <span>제목: {user.title}</span>
            <span> 내용: {user.body}</span>
            <button onClick={() => removeUser(user.id)}>삭제</button>
            <button onClick={() => removeUser(user.id)}>완료</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
