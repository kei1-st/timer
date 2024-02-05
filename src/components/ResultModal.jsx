import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => {
    // 引数で渡された ref はこの関数に向いている
    // arg1: ref, arg2: callback
    return {
      open() {
        // open() の中身は自由に変えよ
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
