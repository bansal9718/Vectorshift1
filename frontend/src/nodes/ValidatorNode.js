// src/nodes/ValidatorNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const ValidatorNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title="Validator"
      handleNameChange={(name) => console.log('Validator name changed to:', name)}
      handleTypeChange={(type) => console.log('Validator type changed to:', type)}
      typeOptions={[
        { value: 'Regex', label: 'Regex' },
        { value: 'Range', label: 'Range' }
      ]}
      handlesConfig={[
        { type: 'source', position: Position.Right, id: 'output' },
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>
        <span>Validator Node</span>
      </div>
    </NodeAbstraction>
  );
}
