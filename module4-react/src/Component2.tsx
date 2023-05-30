import { FC } from "react";

export const Component2: FC<any> = (props) => {
  return (
    <div style={{ border: "1px solid red", width: "300px", height: "300px" }}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
