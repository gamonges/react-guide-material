import { useContext } from "react";
import { myContext } from "../Example";

const GrandChild = () => {
  const value = useContext(myContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {value}
    </div>
  );
};
export default GrandChild;
