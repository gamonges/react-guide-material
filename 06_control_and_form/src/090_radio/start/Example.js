import { useState } from "react";
import Text from "./components/Text";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => {
    setFruit(e.target.value);
  };

  const RADIO_COLLECTIOTN = ["Apple", "Banana", "Cherry"];

  return (
    <>
      {RADIO_COLLECTIOTN.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      <Text fruit={fruit} />
    </>
  );
};

export default Example;
