import axios from "axios";
import React from "react";
import TextComponent from "../../components/textComponent";
import ButtonComponent from "../../components/buttonComponent";
import InputComponent from "../../components/inputComponent";
import ImageComponent from "../../components/imageComponent";
import HrefComponent from "../../components/hrefComponent";
import "./index.css";

interface IElementPanelProps {
  data: any;
}

export default function ElementPanel(props: IElementPanelProps) {
  const { data } = props;

  return (
    <div className="element-panel">
      <div className="component-list">
        <TextComponent></TextComponent>
        <ButtonComponent></ButtonComponent>
        <InputComponent></InputComponent>
        <ImageComponent></ImageComponent>
        <HrefComponent></HrefComponent>
      </div>
      <button
        className="save-button"
        onClick={() => {
          console.log("save:", data);
          axios
            .post("/api/save", { drawPanelData: data })
            .then((res) => {
              console.log("res:", res);
            })
            .catch((err) => {
              console.log("err:", err);
            });
        }}
      >
        保存到后台
      </button>
    </div>
  );
}
