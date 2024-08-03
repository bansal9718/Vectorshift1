// src/nodes/InputNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { MdInput } from "react-icons/md";

export const InputNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title={
        <div>
          Input
          <MdInput style={{ marginLeft: "10px" }} />
        </div>
      }
      handleNameChange={(name) => console.log("Name changed to:", name)}
      handleTypeChange={(type) => console.log("Type changed to:", type)}
      typeOptions={[{ value: "Text", label: "Text" }]}
      handlesConfig={[
        { type: "source", position: Position.Right, id: "value" },
      ]}
    >
      <div>
        <span style={{ color: "gray" }}>Input the node data as specified</span>
      </div>
    </NodeAbstraction>
  );
};
