// src/nodes/TransformNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { TbTransform } from "react-icons/tb";

export const TransformNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title={
        <div>
          Transform
          <TbTransform style={{ marginLeft: "9px" }} />
        </div>
      }
      handleNameChange={(name) =>
        console.log("Transform name changed to:", name)
      }
      handleTypeChange={(type) =>
        console.log("Transform type changed to:", type)
      }
      typeOptions={[
        { value: "Scale", label: "Scale" },
        { value: "Rotate", label: "Rotate" },
      ]}
      handlesConfig={[
        { type: "source", position: Position.Right, id: "output" },
        { type: "target", position: Position.Left, id: "input" },
      ]}
    >
      <div style={{paddingBottom:'20px'}}>
        <span style={{color:'gray'}}>Transform the node on specified features</span>
      </div>
    </NodeAbstraction>
  );
};
