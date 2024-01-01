const Example = () => {
  const num = { val: 2 };
  const double = (num) => {
    num.val = num.val * 2;
    return num;
  };
  const newNum = double(num);
  console.log("newNum", newNum, "num", num);
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
      <div>不変性（Immutability）：{double(num).val}</div>
    </>
  );
};

export default Example;
