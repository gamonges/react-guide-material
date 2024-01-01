const ChildPure = ({ value }) => {
  return <div>{value}</div>;
};

const Example = () => {
  let value = 0;

  return (
    <>
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
