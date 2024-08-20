import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 투두 입력값들을 담을 수 있는 array

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo(""); // input의 value를 비워주자.
    setToDos(currentArray => [toDo, ...currentArray]); // toDos 배열에 이전 배열 포함 + 추가
  }

  console.log(toDos); // 잘 작동하는지 확인하기 위해

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;