import { useState, useReducer } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type }) => {
    //    if (action === "+") {
    //      return ++prev;
    //    }
    //    if (action === "-") {
    //      return --prev;
    //    }
    switch (type) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
      default:
        throw new Error("不明なアクションです");
    }
  }, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };
  const rcountUp = () => {
    dispatch({ type: "+" });
  };

  const rcountDown = () => {
    dispatch({ type: "-" });
  };

  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>

      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
