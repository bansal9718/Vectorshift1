// src/nodes/ValidatorNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { GrValidate } from "react-icons/gr";

export const ValidatorNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title={
        <div>
          Validate
          <GrValidate style={{ marginLeft: "9px" }} />
        </div>
      }
      handleNameChange={(name) =>
        console.log("Validator name changed to:", name)
      }
      handleTypeChange={(type) =>
        console.log("Validator type changed to:", type)
      }
      typeOptions={[
        { value: "Regex", label: "Regex" },
        { value: "Range", label: "Range" },
      ]}
      handlesConfig={[
        { type: "source", position: Position.Right, id: "output" },
        { type: "target", position: Position.Left, id: "input" },
      ]}
    >
      <div style={{paddingBottom:'20px'}}>
        <span style={{color:'gray'}}>Validates the Data Passed</span>
      </div>
    </NodeAbstraction>
  );
};
