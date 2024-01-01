import Child from "./components/Child";

const hello = (arg) => {
  return `Hello ${arg}`;
};
const o = {
  color: "red",
  num: 123,
};
const Example = () => (
  <>
    <Child {...o} fn={hello} bool obj={{ name: "Tom", age: 18 }} />
  </>
);

export default Example;
