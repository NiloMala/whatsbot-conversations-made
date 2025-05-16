
import React from 'react';
import { MessageCircle, HelpCircle, Users, ArrowRight, Trash2, ZoomIn, ZoomOut, Plus, Settings, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlowToolbarProps {
  onAddNode: (type: string) => void;
  onDeleteSelected: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onSave: () => void;
  hasSelection: boolean;
}

const FlowToolbar: React.FC<FlowToolbarProps> = ({
  onAddNode,
  onDeleteSelected,
  onZoomIn,
  onZoomOut,
  onSave,
  hasSelection
}) => {
  return (
    <div className="bg-white border-b p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded-md overflow-hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 px-3 py-1 h-auto rounded-none border-r"
            onClick={() => onAddNode('message')}
          >
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <span className="text-xs">Mensagem</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 px-3 py-1 h-auto rounded-none border-r"
            onClick={() => onAddNode('question')}
          >
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="text-xs">Pergunta</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1 px-3 py-1 h-auto rounded-none border-r"
            onClick={() => onAddNode('human')}
          >
            <Users className="h-4 w-4 text-green-600" />
            <span className="text-xs">Atendente</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1 px-3 py-1 h-auto rounded-none"
            onClick={() => onAddNode('redirect')}
          >
            <ArrowRight className="h-4 w-4 text-amber-600" />
            <span className="text-xs">Redirecionamento</span>
          </Button>
        </div>

        <div className="h-6 border-r mx-1"></div>

        <Button 
          variant="ghost" 
          size="icon"
          onClick={onZoomIn}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onZoomOut}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          disabled={!hasSelection}
          onClick={onDeleteSelected}
        >
          <Trash2 className={`h-4 w-4 ${!hasSelection ? 'text-gray-400' : 'text-red-500'}`} />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => {}}
        >
          <Settings className="h-4 w-4" />
          <span className="text-xs">Configurações</span>
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          className="flex items-center gap-1 bg-brand-500 hover:bg-brand-600 text-white"
          onClick={onSave}
        >
          <Download className="h-4 w-4" />
          <span className="text-xs">Salvar Bot</span>
        </Button>
      </div>
    </div>
  );
};

export default FlowToolbar;
