// src/nodes/NodeAbstraction.js
import React, { useState } from "react";
import { Handle } from "reactflow";
import "./NodeAbstraction.css";

const NodeAbstraction = ({
  id,
  data,
  title,
  handleNameChange,
  handleTypeChange,
  typeOptions,
  handlesConfig,
  children,
}) => {
  const [currName, setCurrName] = useState(data?.name || id);

  const [currType, setCurrType] = useState(
    data?.type || typeOptions?.[0]?.value || ""
  );

  return (
    <div className="node-container">
      <div className="node-header">
        <h3 style={{ color: "#F75D59" }}>{title}</h3>
      </div>

      <div className="node-content">
        {handleNameChange && (
          <label className="node-label">
            Name:
            <input
              type="text"
              value={currName}
              onChange={(e) => {
                setCurrName(e.target.value);
                handleNameChange?.(e.target.value);
              }}
              className="node-input"
            />
          </label>
        )}
        {typeOptions && (
          <label className="node-label">
            Type:
            <select
              value={currType}
              onChange={(e) => {
                setCurrType(e.target.value);
                handleTypeChange?.(e.target.value);
              }}
              className="node-select"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      {handlesConfig.map((handle, index) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`} // Construct handle ID (node-handleID)
          style={handle.style}
        />
      ))}
      {children}
    </div>
  );
};

export default NodeAbstraction;
