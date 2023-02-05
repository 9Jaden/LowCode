import React from "react";
import { useDrag } from "react-dnd";
import { COMPONENT_TYPE } from "../../constants";
import "./index.css";

export default function HrefComponent() {
  const [_, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.HREF,
  }));

  return (
    <div className="href-component" ref={drag}>
      外链组件
    </div>
  );
}
