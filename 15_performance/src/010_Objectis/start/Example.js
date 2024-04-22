import { useState } from "react";

//const StrictComp = () => {
//  return (
//    <StrictMode>
//      <Example />
//    </StrictMode>
//  );
//};
const Example = () => {
  const [countA, setCountA] = useState({ val: 0 });
  console.log("render/start");

  return (
    <>
      <h3>再レンダリングが発生する条件</h3>
      <button
        onClick={() => {
          setCountA((prev) => {
            const newState = { ...prev };
            newState.val = 10;
            return newState;
          });
        }}
      >
        ボタンA
      </button>
      <p>{countA.val}</p>
    </>
  );
};

export default Example;
