import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
        <h3>Hello Fragment</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Fragment>
  );
};

export default Child;
