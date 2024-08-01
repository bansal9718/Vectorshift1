// src/nodes/AggregatorNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';

export const AggregatorNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title="Aggregator"
      handleNameChange={(name) => console.log('Aggregator name changed to:', name)}
      handleTypeChange={(type) => console.log('Aggregator type changed to:', type)}
      typeOptions={[
        { value: 'Sum', label: 'Sum' },
        { value: 'Average', label: 'Average' }
      ]}
      handlesConfig={[
        { type: 'source', position: Position.Right, id: 'output' },
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>
        <span>Aggregator Node</span>
      </div>
    </NodeAbstraction>
  );
}
