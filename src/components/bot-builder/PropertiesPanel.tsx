
import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FlowNode, ResponseOption, ButtonOption } from '@/types/flowTypes';

interface PropertiesPanelProps {
  selectedNode: FlowNode | null;
  onUpdateNode: (id: string, data: any) => void;
  onClose: () => void;
}

const PropertiesPanel: React.FC<PropertiesPanelProps> = ({
  selectedNode,
  onUpdateNode,
  onClose
}) => {
  const [nodeName, setNodeName] = useState('');
  const [nodeContent, setNodeContent] = useState('');
  const [responseOptions, setResponseOptions] = useState<ResponseOption[]>([]);
  const [buttons, setButtons] = useState<ButtonOption[]>([]);
  const [mediaType, setMediaType] = useState<string>('none');
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setNodeName(selectedNode.data.label || '');
      setNodeContent(selectedNode.data.content || '');
      setResponseOptions(selectedNode.data.responseOptions || []);
      setButtons(selectedNode.data.buttons || []);
      setMediaType(selectedNode.data.mediaType || 'none');
      setMediaUrl(selectedNode.data.mediaUrl || '');
    }
  }, [selectedNode]);

  const handleSave = () => {
    if (!selectedNode) return;
    
    onUpdateNode(selectedNode.id, {
      ...selectedNode.data,
      label: nodeName,
      content: nodeContent,
      responseOptions,
      buttons,
      mediaType,
      mediaUrl
    });
  };

  const addResponseOption = () => {
    const newOption: ResponseOption = {
      id: `option-${Date.now()}`,
      text: '',
    };
    setResponseOptions([...responseOptions, newOption]);
  };

  const updateResponseOption = (index: number, text: string) => {
    const updatedOptions = [...responseOptions];
    updatedOptions[index].text = text;
    setResponseOptions(updatedOptions);
  };

  const removeResponseOption = (index: number) => {
    const updatedOptions = [...responseOptions];
    updatedOptions.splice(index, 1);
    setResponseOptions(updatedOptions);
  };

  const addButton = () => {
    const newButton: ButtonOption = {
      id: `button-${Date.now()}`,
      text: '',
      action: 'link',
      value: ''
    };
    setButtons([...buttons, newButton]);
  };

  const updateButton = (index: number, field: keyof ButtonOption, value: string) => {
    const updatedButtons = [...buttons];
    updatedButtons[index] = {
      ...updatedButtons[index],
      [field]: value
    };
    setButtons(updatedButtons);
  };

  const removeButton = (index: number) => {
    const updatedButtons = [...buttons];
    updatedButtons.splice(index, 1);
    setButtons(updatedButtons);
  };

  if (!selectedNode) return null;

  return (
    <div className="w-80 bg-white border-l h-full overflow-y-auto">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium">Propriedades do Bloco</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome do bloco</label>
          <Input 
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder="Ex: Boas-vindas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Conteúdo da mensagem</label>
          <Textarea 
            value={nodeContent}
            onChange={(e) => setNodeContent(e.target.value)}
            placeholder="Digite a mensagem que será enviada"
            rows={4}
          />
        </div>

        {selectedNode.data.type === 'question' && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Opções de resposta</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={addResponseOption}
                className="h-7 text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-2">
              {responseOptions.map((option, index) => (
                <div key={option.id} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <Input 
                    value={option.text}
                    onChange={(e) => updateResponseOption(index, e.target.value)}
                    placeholder="Texto da opção"
                    className="text-sm"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7" 
                    onClick={() => removeResponseOption(index)}
                  >
                    <Trash2 className="h-3 w-3 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Tipo de mídia</label>
          <select
            className="w-full px-3 py-2 bg-white border rounded-md text-sm"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="none">Sem mídia</option>
            <option value="image">Imagem</option>
            <option value="video">Vídeo</option>
            <option value="audio">Áudio</option>
            <option value="file">Arquivo</option>
          </select>
        </div>

        {mediaType !== 'none' && (
          <div>
            <label className="block text-sm font-medium mb-1">URL da mídia</label>
            <Input 
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder="https://exemplo.com/arquivo.jpg"
            />
          </div>
        )}

        {(selectedNode.data.type === 'message') && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Botões</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={addButton}
                className="h-7 text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-3">
              {buttons.map((button, index) => (
                <div key={button.id} className="border p-2 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium">Botão {index + 1}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6" 
                      onClick={() => removeButton(index)}
                    >
                      <Trash2 className="h-3 w-3 text-red-500" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Input 
                      value={button.text}
                      onChange={(e) => updateButton(index, 'text', e.target.value)}
                      placeholder="Texto do botão"
                      className="text-sm mb-1"
                    />
                    
                    <div className="flex gap-2">
                      <select
                        className="flex-1 px-2 py-1 bg-white border rounded-md text-xs"
                        value={button.action}
                        onChange={(e) => updateButton(index, 'action', e.target.value)}
                      >
                        <option value="link">Link</option>
                        <option value="phone">Telefone</option>
                        <option value="nextNode">Próximo bloco</option>
                      </select>
                      
                      <Input 
                        value={button.value}
                        onChange={(e) => updateButton(index, 'value', e.target.value)}
                        placeholder={button.action === 'link' ? 'https://' : button.action === 'phone' ? '+5511...' : 'ID do bloco'}
                        className="text-xs flex-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-end">
          <Button
            className="bg-brand-500 hover:bg-brand-600 text-white"
            onClick={handleSave}
          >
            Salvar alterações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
