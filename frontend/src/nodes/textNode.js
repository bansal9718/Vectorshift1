import React, { useState, useEffect, useRef } from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { IoDocumentTextOutline } from "react-icons/io5";

export const TextNode = ({ id, data, updateNodeData }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const [handlesConfig, setHandlesConfig] = useState(data?.handlesConfig || []);
  const [nodeSize, setNodeSize] = useState({ width: "200px", height: "90px" });
  const textareaRef = useRef(null);

  useEffect(() => {
    const extractHandlesFromText = () => {
      // Regular expression to match variables in double curly braces
      const regex = /\{\{(\w+)\}\}/g;
      const matches = Array.from(text.matchAll(regex));
      const newHandles = matches.map((match, index) => ({
        type: "source",
        position: Position.Left,
        id: match[1], // Variable name as handle id
        style: { top: `${(index + 1) * 30}px` },
      }));
      // Update handlesConfig state
      setHandlesConfig(newHandles); // New array
    };
    console.log("Handles Config:", handlesConfig);

    // Calls extractHandlesFromText Function to match with Regular Expression
    extractHandlesFromText();
  }, [text, data]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";

      // Calculate width and height based on input element
      const newWidth = Math.max(textareaRef.scrollWidth, 200) + "px";
      const newHeight = Math.max(textareaRef.scrollHeight, 60) + "px";
      setNodeSize({ width: newWidth, height: newHeight });
    }
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
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
      <div
        style={{
          width: nodeSize.width,
          height: nodeSize.height,
          overflow: "hidden",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            style={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              resize: "none", // Prevent manual resize
              marginTop:'10px'
            }}
          />
        </label>
      </div>
      <div>
        <br />

        <span>Text Node</span>
      </div>
    </NodeAbstraction>
  );
};
