import { FC } from "react";

export const Component1: FC<any> = (props) => {
  return (
    <div>
      <div>{props.str}</div>
      <div>{props.num}</div>
      <button onClick={props.handler}>Click me</button>
    </div>
  );
};
