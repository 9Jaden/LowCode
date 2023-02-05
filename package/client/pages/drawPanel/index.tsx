import React, { useEffect, useState, useRef, useReducer } from "react";
import { useDrop } from "react-dnd";
import { COMPONENT_TYPE, EDIT_PANEL_TYPE } from "../../constants";
import "./index.css";

interface IDrawPanelProps {
  getData: Function;
  setEditPanelType: Function;
  setEditPanelElementId: Function;
}

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
    width: "150px",
    height: "20px",
    left: "100px",
    top: "200px",
  },
];

export default function DrawPanel(props: IDrawPanelProps) {
  const { getData, setEditPanelType, setEditPanelElementId } = props;
  const [data, setData] = useState([...MOCK_DRAW_DATA]);
  // const [forceUpdate, setfForceUpdate] = useState(true);
  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const [, drop] = useDrop(() => ({
    accept: [
      COMPONENT_TYPE.TEXT,
      COMPONENT_TYPE.BUTTON,
      COMPONENT_TYPE.INPUT,
      COMPONENT_TYPE.IMAGE,
      COMPONENT_TYPE.HREF,
    ],
    drop: (_item, monitor) => {
      const { x, y } = monitor.getClientOffset();
      const currentX = x - 310;
      const currentY = y - 20;
      if (monitor.getItemType() === COMPONENT_TYPE.TEXT) {
        // setData([
        //   ...data,
        //   {
        //     id: `text-${data.length + 1}`,
        //     type: "text",
        //     data: "我是新建的text",
        //     color: "#000000",
        //     size: "12px",
        //     width: "100px",
        //     height: "20px",
        //     left: `${currentX}px`,
        //     top: `${currentY}px`,
        //   },
        // ]);
        data.push({
          id: `text-${data.length + 1}`,
          type: "text",
          data: "我是新建的text",
          color: "#5a629e",
          size: "12px",
          width: "100px",
          height: "20px",
          left: `${currentX}px`,
          top: `${currentY}px`,
        });
      }
      if (monitor.getItemType() === COMPONENT_TYPE.BUTTON) {
        data.push({
          id: `button-${data.length + 1}`,
          type: "button",
          data: "我是新建的button",
          color: "#5a629e",
          size: "12px",
          width: "100px",
          height: "40px",
          left: `${currentX}px`,
          top: `${currentY}px`,
        });
      }
      if (monitor.getItemType() === COMPONENT_TYPE.INPUT) {
        data.push({
          id: `input-${data.length + 1}`,
          type: "input",
          data: "我是新建的输入框",
          color: "#5a629e",
          size: "12px",
          width: "200px",
          height: "20px",
          left: `${currentX}px`,
          top: `${currentY}px`,
        });
      }
      if (monitor.getItemType() === COMPONENT_TYPE.IMAGE) {
        data.push({
          id: `image-${data.length + 1}`,
          type: "image",
          data: `https://source.unsplash.com/random`,
          color: "-",
          size: "-",
          width: "200px",
          height: "130px",
          left: `${currentX}px`,
          top: `${currentY}px`,
        });
      }
      if (monitor.getItemType() === COMPONENT_TYPE.HREF) {
        data.push({
          id: `href-${data.length + 1}`,
          type: "href",
          data: "点击前往JIALIANG's BLOG",
          color: "https://www.baidu.com/",
          size: "12px",
          width: "150px",
          height: "20px",
          left: `${currentX}px`,
          top: `${currentY}px`,
        });
      }
      setData(data);
      getData(data);
    },
  }));

  // useEffect(() => {
  //   setfForceUpdate(false);
  //   setTimeout(() => {
  //     setfForceUpdate(true);
  //   }, 0);
  // }, [data]);

  const generateContent = () => {
    const output = [];
    for (const item of data) {
      if (item.type === COMPONENT_TYPE.TEXT) {
        output.push(
          <div
            key={item.id}
            onClick={() => {
              setEditPanelType(EDIT_PANEL_TYPE.TEXT);
              setEditPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: "absolute",
              backgroundImage: `linear-gradient(rgb(250, 250, 252), rgb(177, 202, 242))`,
              cursor: "pointer",
              borderRadius: "12px",
              padding: "2px 5px",
            }}
          >
            {item.data}
          </div>
        );
      }
      if (item.type === COMPONENT_TYPE.BUTTON) {
        output.push(
          <button
            key={item.id}
            onClick={() => {
              setEditPanelType(EDIT_PANEL_TYPE.BUTTON);
              setEditPanelElementId(item.id);
            }}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: "absolute",
              backgroundImage: `linear-gradient(rgb(79, 227, 26), rgb(177, 202, 242))`,
              border: "1px solid rgb(250, 250, 252)",
              borderRadius: `20px`,
              cursor: "pointer",
            }}
          >
            {item.data}
          </button>
        );
      }
      if (item.type === COMPONENT_TYPE.INPUT) {
        output.push(
          <input
            key={item.id}
            onClick={() => {
              setEditPanelType(EDIT_PANEL_TYPE.INPUT);
              setEditPanelElementId(item.id);
            }}
            onChange={() => {}}
            type="text"
            value={item.data}
            style={{
              color: item.color,
              fontSize: item.size,
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: "absolute",
              backgroundImage: `linear-gradient(#D6FFFF, #e2bcff)`,
              border: "2px solid rgb(177, 202, 242)",
              cursor: "pointer",
            }}
          />
        );
      }
      if (item.type === COMPONENT_TYPE.IMAGE) {
        output.push(
          <img
            key={item.id}
            onClick={() => {
              setEditPanelType(EDIT_PANEL_TYPE.IMAGE);
              setEditPanelElementId(item.id);
            }}
            src={item.data}
            style={{
              width: item.width,
              height: item.height,
              left: item.left,
              top: item.top,
              position: "absolute",
              cursor: "pointer",
            }}
          />
        );
      }
      if (item.type === COMPONENT_TYPE.HREF) {
        output.push(
          <a
            key={item.id}
            onClick={() => {
              setEditPanelType(EDIT_PANEL_TYPE.HREF);
              setEditPanelElementId(item.id);
            }}
            href={item.color}
            target="_blank"
            style={{
              color: `rgb(250, 250, 252)`,
              fontSize: item.size,
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              position: "absolute",
              backgroundImage: `linear-gradient(#5a629e, rgb(177, 202, 242))`,
              border: "1px solid rgb(250, 250, 252)",
              borderRadius: `20px`,
              cursor: "pointer",
              textDecoration: "none",
              padding: "0 5px",
            }}
          >
            {item.data}
          </a>
        );
      }
    }
    return output;
  };

  return (
    <div className="draw-panel" ref={drop}>
      {generateContent()}
    </div>
  );
}
