// src/nodes/LLMNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { GiArtificialHive } from "react-icons/gi";

export const LLMNode = ({ id }) => {
  return (
    <NodeAbstraction
      id={id}
      title={
        <div>
          LLM
          <GiArtificialHive style={{ marginLeft: "11px" }} />
        </div>
      }
      handlesConfig={[
        {
          type: "target",
          position: Position.Left,
          id: "system",
          style: { top: `${100 / 3}%` },
        },

        { type: "source", position: Position.Right, id: "response" },
      ]}
    >
      <div style={{ marginBottom: "120px" }}>
        <span style={{color:'gray'}}>This is a LLM.</span>
      </div>
    </NodeAbstraction>
  );
};
