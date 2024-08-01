// src/nodes/LLMNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  return (
    <NodeAbstraction
      id={id}
      title="LLM"
      handlesConfig={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: `${100/3}%` } },
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200/3}%` } },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </NodeAbstraction>
  );
}
