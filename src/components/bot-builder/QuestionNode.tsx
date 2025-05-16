
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { HelpCircle } from "lucide-react";
import { NodeData } from '@/types/flowTypes';

interface QuestionNodeProps {
  data: NodeData;
  selected: boolean;
}

const QuestionNode: React.FC<QuestionNodeProps> = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 rounded-lg border shadow-sm ${selected ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      <div className="flex items-start gap-2">
        <div className="rounded-full bg-purple-100 p-2 flex-shrink-0">
          <HelpCircle className="h-4 w-4 text-purple-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium mb-1 text-sm">{data.label}</div>
          <div className="text-xs text-gray-600 line-clamp-2">{data.content}</div>
          
          {data.responseOptions && data.responseOptions.length > 0 && (
            <div className="mt-2 space-y-1">
              {data.responseOptions.map((option, index) => (
                <div key={option.id} className="flex items-center space-x-1">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium">{index + 1}</span>
                  <span className="text-xs">{option.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-purple-500" />
      {data.responseOptions && data.responseOptions.map((option, index) => (
        <Handle 
          key={option.id}
          id={option.id}
          type="source" 
          position={Position.Bottom} 
          className="w-3 h-3 bg-purple-500"
          style={{ left: `${(index + 1) * (100 / (data.responseOptions?.length || 1) + 1)}%` }}
        />
      ))}
    </div>
  );
};

export default QuestionNode;
