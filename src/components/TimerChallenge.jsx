import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open(); // dialog ref 経由で open() を呼び出す
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} challenge.
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
