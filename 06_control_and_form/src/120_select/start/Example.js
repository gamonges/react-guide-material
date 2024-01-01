import { useState } from "react";
const Example = () => {
  const initialSelected = "Apple";
  const OPTIONS = [initialSelected, "Banana", "Cherry"];

  const [selected, setSelected] = useState(initialSelected);

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div>選択された果物：{selected}</div>
    </>
  );
};

export default Example;
