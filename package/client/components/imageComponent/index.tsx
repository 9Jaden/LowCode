import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../../constants";
import "./index.css";

export default function ButtonComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.IMAGE,
  }));

  return (
    <div className="image-component" ref={drag}>
      图片组件
    </div>
  );
}
