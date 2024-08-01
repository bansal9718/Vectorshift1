// src/nodes/TransformNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const TransformNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title="Transform"
      handleNameChange={(name) => console.log('Transform name changed to:', name)}
      handleTypeChange={(type) => console.log('Transform type changed to:', type)}
      typeOptions={[
        { value: 'Scale', label: 'Scale' },
        { value: 'Rotate', label: 'Rotate' }
      ]}
      handlesConfig={[
        { type: 'source', position: Position.Right, id: 'output' },
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>
        <span>Transform Node</span>
      </div>
    </NodeAbstraction>
  );
}
