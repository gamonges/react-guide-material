import { useState } from "react";
const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></input>
        <textarea
          id="456"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <h3>{val}</h3>
        <button onClick={clearVal}>クリア</button>
      </div>
    </div>
  );
};

export default Example;
