
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Users } from "lucide-react";
import { NodeData } from '@/types/flowTypes';

interface HumanNodeProps {
  data: NodeData;
  selected: boolean;
}

const HumanNode: React.FC<HumanNodeProps> = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 rounded-lg border shadow-sm ${selected ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`}>
      <div className="flex items-start gap-2">
        <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
          <Users className="h-4 w-4 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium mb-1 text-sm">{data.label}</div>
          <div className="text-xs text-gray-600 line-clamp-2">
            {data.content || "Encaminhar para atendente humano"}
          </div>
        </div>
      </div>
      
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-green-500" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-green-500" />
    </div>
  );
};

export default HumanNode;
