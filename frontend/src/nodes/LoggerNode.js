// src/nodes/LoggerNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const LoggerNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title="Logger"
      handleNameChange={(name) => console.log('Logger name changed to:', name)}
      handleTypeChange={(type) => console.log('Logger type changed to:', type)}
      typeOptions={[
        { value: 'Console', label: 'Console' },
        { value: 'File', label: 'File' }
      ]}
      handlesConfig={[
        { type: 'source', position: Position.Right, id: 'output' },
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>
        <span>Logger Node</span>
      </div>
    </NodeAbstraction>
  );
}
