// src/nodes/OutputNode.js
import React from 'react';
import NodeAbstraction from '../NodeAbstraction';
import { Position } from 'reactflow';
import { LuFileOutput } from "react-icons/lu";

export const OutputNode = ({ id, data }) => {
  return (
    <NodeAbstraction
      id={id}
      data={data}
      title= {<div>
        Output
        <LuFileOutput style={{marginLeft:"8px"}} />

      </div>}
      handleNameChange={(name) => console.log('Name changed to:', name)}
      handleTypeChange={(type) => console.log('Type changed to:', type)}
      typeOptions={[
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' }
      ]}
      handlesConfig={[
        { type: 'target', position: Position.Left, id: 'value' },
        { type: 'source', position: Position.Right, id: 'value' }

      ]}
    >
      <div >
        <span>Output Node</span>
      </div>
    </NodeAbstraction>
  );
}
