
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { ArrowRight } from "lucide-react";
import { NodeData } from '@/types/flowTypes';

interface RedirectNodeProps {
  data: NodeData;
  selected: boolean;
}

const RedirectNode: React.FC<RedirectNodeProps> = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 rounded-lg border shadow-sm ${selected ? 'border-amber-500 ring-2 ring-amber-200' : 'border-gray-200'}`}>
      <div className="flex items-start gap-2">
        <div className="rounded-full bg-amber-100 p-2 flex-shrink-0">
          <ArrowRight className="h-4 w-4 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium mb-1 text-sm">{data.label}</div>
          <div className="text-xs text-gray-600 line-clamp-2">
            {data.content || "Redirecionamento para outro fluxo"}
          </div>
          
          {data.buttons && data.buttons.length > 0 && (
            <div className="mt-2 space-y-1">
              {data.buttons.map(button => (
                <div key={button.id} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                  {button.text}: {button.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-amber-500" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-amber-500" />
    </div>
  );
};

export default RedirectNode;
