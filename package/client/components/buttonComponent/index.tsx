import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../../constants";
import "./index.css";

export default function ButtonComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.BUTTON,
  }));

  return (
    <div className="button-component" ref={drag}>
      按钮组件
    </div>
  );
}
