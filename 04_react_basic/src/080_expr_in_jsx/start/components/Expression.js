const Expression = () => {
  const title = "Expression";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => {
    return `${arg} Function`;
  };
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello("Hello")}</h3>
      <h3>{/* hogehogehogheohoge*/}</h3>
      {<h3>Hello JSX</h3>}
    </div>
  );
};
export default Expression;
