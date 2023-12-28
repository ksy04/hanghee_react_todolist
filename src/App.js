import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "리엑트를 배워보아용" }]);
  const [name, setName] = useState("");

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      name,
    };

    setUsers([...users, newUser]);
  };

  return (
    <di>
      <div className="center-container">
        <div>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>

        <h2>Todo List</h2>
      </div>

      <div className="app-style">
        {users.map(function (item) {
          return (
            <div key={item.id} className="componenet-style">
              {item.name}
            </div>
          );
        })}
      </div>
    </di>
  );
}

export default App;
