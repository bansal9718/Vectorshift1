import React, { useState, useEffect } from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { IoDocumentTextOutline } from "react-icons/io5";

export const TextNode = ({ id, data }) => {
  // State to manage the text input and handle configurations
  const [text, setText] = useState(data?.text || "{{input}}");
  const [handlesConfig, setHandlesConfig] = useState(data?.handlesConfig || []);

  useEffect(() => {
    // Function to extract variable names surrounded by double curly brackets {{variable}}
    const extractHandlesFromText = () => {
      const regex = /\{\{(\w+)\}\}/g;
      const matches = Array.from(text.matchAll(regex));
    
       const newHandles = matches.map((match, index) => ({
        type: "source", // Ensure the type matches your use case
        position: Position.Left,
        id: match[1], // Ensure unique ID
        style: { top: `${(index + 1) * 30}px` }, // Position handles vertically
      }));
      setHandlesConfig(newHandles);
    };

    extractHandlesFromText();
  }, [text, data?.id]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const textareaStyle = {
    width: "90%",
    height: "57%",
    boxSizing: "border-box",
    resize: "none",
    marginTop: "14px",
    borderRadius: "8px",
    border: "1.5px solid black",
  };

  const containerStyle = {
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    marginBottom: "60px",
  };

  return (
    <NodeAbstraction
      id={id}
      data={{ ...data, text, handlesConfig }}
      title={
        <div>
          Text
          <IoDocumentTextOutline style={{ marginLeft: "7px" }} />
        </div>
      }
      handlesConfig={handlesConfig}
    >
      <div style={containerStyle}>
        <label>
          Text:
          <textarea
            value={text}
            onChange={handleTextChange}
            style={textareaStyle}
          />
        </label>
      </div>
      <div>
        <br />
        <span style={{ color: "gray", paddingBottom: "30px" }}>
          Takes Javascript Variables as inputs
        </span>
      </div>
    </NodeAbstraction>
  );
};
