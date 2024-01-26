import { useState, useRef } from "react";

export default function Player() {
  let currentUserName = useRef();

  const [userName, setUserName] = useState("");

  function handleClick() {
    setUserName(currentUserName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {userName ? userName : "unknown entity"}</h2>
      <p>
        <input ref={currentUserName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
