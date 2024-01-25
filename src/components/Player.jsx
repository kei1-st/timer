import { useState } from "react";

export default function Player() {
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? userName : "unknown entity"}</h2>
      <p>
        <input onChange={handleChange} value={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
