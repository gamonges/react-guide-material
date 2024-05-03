import React from "react";

function areEqual(prevProps, nextProps) {
  return prevProps.countB !== nextProps.countB ? false : true;
}

const ChildMemo = React.memo(({ countB }) => {
  console.log("Child render");
  return (
    <div className="child">
      <h3>子コンポーネント領域</h3>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
}, areEqual);

export default ChildMemo;
