import { useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState("unknown entity");

  function handleClick(userName) {
    setUserName(userName);
  }

  let newUserName = "unknown entity";

  return (
    <section id="player">
      <h2>Welcome {userName}</h2>
      <p>
        <input
          onChange={(e) => {
            newUserName = e.target.value;
          }}
          type="text"
        />
        <button onClick={() => handleClick(newUserName)}>Set Name</button>
      </p>
    </section>
  );
}
