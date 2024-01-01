import { useState } from "react";
const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggledCheckd = (e) => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div>
      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={(e) => toggledCheckd(e)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
