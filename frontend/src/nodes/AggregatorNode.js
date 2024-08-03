// src/nodes/AggregatorNode.js
import React from "react";
import NodeAbstraction from "../NodeAbstraction";
import { Position } from "reactflow";
import { GrAggregate } from "react-icons/gr";

export const AggregatorNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title={
        <div>
          Aggregate
          <GrAggregate style={{ marginLeft: "9px" }} />
        </div>
      }
      handleNameChange={(name) =>
        console.log("Aggregator name changed to:", name)
      }
      handleTypeChange={(type) =>
        console.log("Aggregator type changed to:", type)
      }
      typeOptions={[
        { value: "Sum", label: "Sum" },
        { value: "Average", label: "Average" },
      ]}
      handlesConfig={[
        { type: "source", position: Position.Right, id: "output" },
        { type: "target", position: Position.Left, id: "input" },
      ]}
    >
      <div>
        <span style={{ color: "gray" }}>Aggregates the node data</span>
      </div>
    </NodeAbstraction>
  );
};
