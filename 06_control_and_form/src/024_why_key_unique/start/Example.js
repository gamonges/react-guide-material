import { useState } from "react";
const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });

  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()]);

  const unshiftInput = () => {
    setInputs((prev) => [inputFact(), ...prev]);
  };

  return (
    <div className="flex">
      <button onClick={{ unshiftInput }}>先頭に追加</button>
      <div>
        <strong>{`key={ユニークキー}`}</strong>
      </div>
      {inputs.map((input) => (
        <li key={input.key}>
          {input.key}: <input key={input.value}></input>
        </li>
      ))}
    </div>
  );
};

export default Example;
