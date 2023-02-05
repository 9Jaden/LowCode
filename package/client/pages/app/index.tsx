import React, { useState, useReducer } from "react";
import "./index.css";
import ElementPanel from "../elementPanel";
import DrawPanel from "../drawPanel";
import EditPanel from "../editPanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { EDIT_PANEL_TYPE } from "../../constants";

const MOCK_DRAW_DATA = [
  {
    id: "text-1",
    type: "text",
    data: "Welcome to 低代码平台",
    color: "#5a629e",
    size: "14px",
    width: "180px",
    height: "25px",
    left: "100px",
    top: "100px",
  },
  {
    id: "text-2",
    type: "text",
    data: "请尝试拖动左侧元素",
    color: "#5a629e",
    size: "14px",
    width: "150px",
    height: "25px",
    left: "100px",
    top: "150px",
  },
  {
    id: "text-3",
    type: "text",
    data: "图片来自unsplash 需加载",
    color: "#5a629e",
    size: "12px",
    width: "100px",
    height: "20px",
    left: "100px",
    top: "200px",
  },
];

export default function App() {
  const [drawPanelData, setDrawPanelData] = useState([...MOCK_DRAW_DATA]);
  const [editPanelType, setEditPanelType] = useState(EDIT_PANEL_TYPE.NONE);
  const [editPanelElementId, setEditPanelElementId] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0); // 强制更新

  console.log(drawPanelData);
  const getDrawlPanelData = (data) => {
    setDrawPanelData(data);
    forceUpdate();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-row-space-between app">
        <ElementPanel data={drawPanelData}></ElementPanel>
        <DrawPanel
          getData={getDrawlPanelData}
          setEditPanelType={setEditPanelType}
          setEditPanelElementId={setEditPanelElementId}
        ></DrawPanel>
        <EditPanel
          type={editPanelType}
          data={drawPanelData}
          elementId={editPanelElementId}
          setDrawPanelData={setDrawPanelData}
        ></EditPanel>
      </div>
    </DndProvider>
  );
}
