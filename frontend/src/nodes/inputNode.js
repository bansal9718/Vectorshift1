// src/nodes/InputNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title="Input"
      handleNameChange={(name) => console.log('Name changed to:', name)}
      handleTypeChange={(type) => console.log('Type changed to:', type)}
      typeOptions={[
        { value: 'Text', label: 'Text' },
        
      ]}
      handlesConfig={[
        { type: 'source', position: Position.Right, id: 'value' }
      ]}
      
    >
      <div>
        <span>Input Node</span>
      </div>
   </NodeAbstraction>
  );
}
