
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { MessageCircle, Image, Video, FileText, Headphones } from "lucide-react";
import { NodeData } from '@/types/flowTypes';

interface MessageNodeProps {
  data: NodeData;
  selected: boolean;
}

const MessageNode: React.FC<MessageNodeProps> = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 rounded-lg border shadow-sm ${selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      <div className="flex items-start gap-2">
        <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
          <MessageCircle className="h-4 w-4 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium mb-1 text-sm">{data.label}</div>
          <div className="text-xs text-gray-600 line-clamp-2">{data.content}</div>
          
          {data.mediaType && data.mediaType !== 'none' && (
            <div className="mt-2 flex items-center text-xs text-gray-500">
              {data.mediaType === 'image' && <Image className="h-3 w-3 mr-1" />}
              {data.mediaType === 'video' && <Video className="h-3 w-3 mr-1" />}
              {data.mediaType === 'audio' && <Headphones className="h-3 w-3 mr-1" />}
              {(data.mediaType === 'document' || data.mediaType === 'file') && <FileText className="h-3 w-3 mr-1" />}
              {data.mediaType}
            </div>
          )}
          
          {data.buttons && data.buttons.length > 0 && (
            <div className="mt-2 space-y-1">
              {data.buttons.map(button => (
                <div key={button.id} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                  {button.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-500" />
    </div>
  );
};

export default MessageNode;
