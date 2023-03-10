import React from "react";
import { EDIT_PANEL_TYPE } from "../../constants";
import "./index.css";

interface IEditPanelProps {
  type: EDIT_PANEL_TYPE;
  data: any;
  elementId: string;
  setDrawPanelData: Function;
}

export default function EditPanel(props: IEditPanelProps) {
  const { type, data, elementId, setDrawPanelData } = props;

  const findCurrentElement = (id: string) => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
    }
    return undefined;
  };

  const findCurrentElementAndChangeData = (
    id: string,
    key: string,
    changedData: any
  ) => {
    for (let item of data) {
      if (item.id === id) {
        item[key] = changedData;
      }
    }
    setDrawPanelData([...data]);
  };

  const generateEditPanel = () => {
    const elementData = findCurrentElement(elementId);
    if (elementData == null || type === EDIT_PANEL_TYPE.NONE) {
      return <div>未选中元素</div>;
    } else if (type === EDIT_PANEL_TYPE.TEXT) {
      const inputDomObject = [];

      return (
        <div key={elementId}>
          <p>文字元素</p>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>文字内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(
                elementId,
                "data",
                inputDomObject[0].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "color",
                inputDomObject[1].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "size",
                inputDomObject[2].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "width",
                inputDomObject[3].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "height",
                inputDomObject[4].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "top",
                inputDomObject[5].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "left",
                inputDomObject[6].value
              );
            }}
          >
            确定
          </button>
        </div>
      );
    } else if (type === EDIT_PANEL_TYPE.BUTTON) {
      const inputDomObject = [];

      return (
        <div key={elementId}>
          <p>按钮元素</p>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>按钮内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(
                elementId,
                "data",
                inputDomObject[0].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "color",
                inputDomObject[1].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "size",
                inputDomObject[2].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "width",
                inputDomObject[3].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "height",
                inputDomObject[4].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "top",
                inputDomObject[5].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "left",
                inputDomObject[6].value
              );
            }}
          >
            确定
          </button>
        </div>
      );
    } else if (type === EDIT_PANEL_TYPE.INPUT) {
      const inputDomObject = [];

      return (
        <div key={elementId}>
          <p>INPUT元素</p>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>默认内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字颜色:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(
                elementId,
                "data",
                inputDomObject[0].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "color",
                inputDomObject[1].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "size",
                inputDomObject[2].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "width",
                inputDomObject[3].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "height",
                inputDomObject[4].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "top",
                inputDomObject[5].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "left",
                inputDomObject[6].value
              );
            }}
          >
            确定
          </button>
        </div>
      );
    } else if (type === EDIT_PANEL_TYPE.IMAGE) {
      const inputDomObject = [];

      return (
        <div key={elementId}>
          <p>图片元素</p>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>图片源:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(
                elementId,
                "data",
                inputDomObject[0].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "width",
                inputDomObject[3].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "height",
                inputDomObject[4].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "top",
                inputDomObject[5].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "left",
                inputDomObject[6].value
              );
            }}
          >
            确定
          </button>
        </div>
      );
    } else if (type === EDIT_PANEL_TYPE.HREF) {
      const inputDomObject = [];

      return (
        <div key={elementId}>
          <p>外链元素</p>
          <br />
          <div className="flex-row-space-between text-config-item">
            <div>文字内容:</div>
            <input
              defaultValue={elementData.data}
              ref={(element) => {
                inputDomObject[0] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>跳转链接:</div>
            <input
              defaultValue={elementData.color}
              ref={(element) => {
                inputDomObject[1] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>文字大小:</div>
            <input
              defaultValue={elementData.size}
              ref={(element) => {
                inputDomObject[2] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>width:</div>
            <input
              defaultValue={elementData.width}
              ref={(element) => {
                inputDomObject[3] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>height:</div>
            <input
              defaultValue={elementData.height}
              ref={(element) => {
                inputDomObject[4] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>top:</div>
            <input
              defaultValue={elementData.top}
              ref={(element) => {
                inputDomObject[5] = element;
              }}
              type="text"
            ></input>
          </div>
          <div className="flex-row-space-between text-config-item">
            <div>left:</div>
            <input
              defaultValue={elementData.left}
              ref={(element) => {
                inputDomObject[6] = element;
              }}
              type="text"
            ></input>
          </div>
          <br />
          <button
            onClick={() => {
              findCurrentElementAndChangeData(
                elementId,
                "data",
                inputDomObject[0].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "color",
                inputDomObject[1].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "size",
                inputDomObject[2].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "width",
                inputDomObject[3].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "height",
                inputDomObject[4].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "top",
                inputDomObject[5].value
              );
              findCurrentElementAndChangeData(
                elementId,
                "left",
                inputDomObject[6].value
              );
            }}
          >
            确定
          </button>
        </div>
      );
    }
  };

  return <div className="edit-panel">{generateEditPanel()}</div>;
}
