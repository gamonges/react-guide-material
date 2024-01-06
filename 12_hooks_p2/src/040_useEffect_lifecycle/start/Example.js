import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  useEffect(
    function update() {
      console.log("update");
      return function cleanUp() {
        console.log("update clean up");
      };
    },
    [state]
  );

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("mount clean up");
    };
  }, []);

  console.log("render");

  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
      <h3>他のレクチャーを選ぶとunmountが呼ばれます。</h3>
    </>
  );
};

export default Example;
