import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../../constants";
import "./index.css";

export default function ButtonComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.INPUT,
  }));

  return (
    <div className="input-component" ref={drag}>
      输入框组件
    </div>
  );
}
