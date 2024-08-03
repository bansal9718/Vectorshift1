// src/nodes/FilterNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { LuFilter } from "react-icons/lu";

export const FilterNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title={
        <div>
          Filter
          <LuFilter style={{ marginLeft: "7px" }} /> {/* Icon */}
        </div>
      }
      handleNameChange={(name) => console.log("Filter name changed to:", name)}
      handleTypeChange={(type) => console.log("Filter type changed to:", type)}
      typeOptions={[
        { value: "Text", label: "Text" },
        { value: "Number", label: "Number" },
      ]}
      handlesConfig={[
        { type: "source", position: Position.Right, id: "output" },
        { type: "target", position: Position.Left, id: "input" },
      ]}
    >
      <div>
        <span style={{ color: "gray" }}>Filters the node data </span>
      </div>
    </NodeAbstraction>
  );
};
