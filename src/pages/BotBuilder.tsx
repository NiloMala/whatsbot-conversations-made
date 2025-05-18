import React, { useState, useCallback, useRef } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import DashboardLayout from '@/components/layout/DashboardLayout';
import FlowToolbar from '@/components/bot-builder/FlowToolbar';
import PropertiesPanel from '@/components/bot-builder/PropertiesPanel';
import MessageNode from '@/components/bot-builder/MessageNode';
import QuestionNode from '@/components/bot-builder/QuestionNode';
import HumanNode from '@/components/bot-builder/HumanNode';
import RedirectNode from '@/components/bot-builder/RedirectNode';
import { FlowNode, FlowEdge, FlowData, NodeData } from '@/types/flowTypes';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Define node types for React Flow
const nodeTypes = {
  message: MessageNode,
  question: QuestionNode,
  human: HumanNode,
  redirect: RedirectNode,
};

// Initial nodes and edges
const initialNodes: FlowNode[] = [
  {
    id: 'start',
    type: 'message',
    position: { x: 250, y: 100 },
    data: {
      label: 'Mensagem de Boas-vindas',
      content: 'Olá! Bem-vindo ao nosso atendimento. Como posso ajudar você hoje?',
      type: 'message',
      mediaType: 'none',
    },
  },
];

const initialEdges: FlowEdge[] = [];

const FlowBuilder = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);
  const [showProperties, setShowProperties] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [botName, setBotName] = useState('');
  const reactFlowInstance = useReactFlow();

  // Handle connection between nodes
  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge({
      ...connection,
      animated: true,
      style: { stroke: '#6366F1', strokeWidth: 2 },
    }, eds));
  }, [setEdges]);
 
  // Handle node click to show properties panel
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node<NodeData>) => {
    setSelectedNode(node as FlowNode);
    setShowProperties(true);
  }, []);

  // Handle click on empty canvas to close properties panel
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setShowProperties(false);
  }, []);

  // Add new node to the flow
  const addNode = useCallback((type: string) => {
    const newNode: FlowNode = {
      id: `node-${Date.now()}`,
      type,
      position: {
        x: Math.random() * 300 + 50,
        y: Math.random() * 300 + 50,
      },
      data: {
        label: type === 'message' ? 'Nova Mensagem' : 
               type === 'question' ? 'Nova Pergunta' :
               type === 'human' ? 'Atendente Humano' : 'Redirecionamento',
        content: '',
        type: type === 'message' ? 'message' : 
              type === 'question' ? 'question' : 
              type === 'human' ? 'human' : 'redirect',
        mediaType: 'none',
      },
    };

    // Add response options for question nodes
    if (type === 'question') {
      newNode.data.responseOptions = [
        { id: `option-${Date.now()}-1`, text: 'Opção 1' },
        { id: `option-${Date.now()}-2`, text: 'Opção 2' },
      ];
    }

    setNodes((nds) => [...nds, newNode]);
  }, [setNodes]);

  // Update node data
  const updateNode = useCallback((id: string, data: NodeData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              ...data,
            },
          };
        }
        return node;
      })
    );
    toast.success('Alterações salvas com sucesso!');
  }, [setNodes]);

  // Delete selected node
  const deleteSelectedNode = useCallback(() => {
    if (!selectedNode) return;
    
    setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
    setEdges((eds) => eds.filter((edge) => 
      edge.source !== selectedNode.id && edge.target !== selectedNode.id
    ));
    setSelectedNode(null);
    setShowProperties(false);
    toast.success('Bloco removido com sucesso!');
  }, [selectedNode, setNodes, setEdges]);

  // Zoom in/out functions
  const zoomIn = () => {
    reactFlowInstance.zoomIn();
  };

  const zoomOut = () => {
    reactFlowInstance.zoomOut();
  };

  // Open save dialog
  const handleSaveClick = () => {
    setSaveDialogOpen(true);
  };

  // Save the flow data
  const saveFlow = () => {
    if (!botName.trim()) {
      toast.error('Por favor, dê um nome ao seu bot!');
      return;
    }
    
    const flowData: FlowData = {
      name: botName,
      nodes: nodes as FlowNode[],
      edges: edges as FlowEdge[],
    };
    
    console.log('Saving flow data:', flowData);
    toast.success(`Bot "${botName}" salvo com sucesso!`);
    setSaveDialogOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full bg-gray-50">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold tracking-tight">Construtor de Bots</h1>
          <p className="text-muted-foreground">
            Crie e configure seu bot de atendimento com facilidade.
          </p>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <FlowToolbar 
              onAddNode={addNode}
              onDeleteSelected={deleteSelectedNode}
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              onSave={handleSaveClick}
              hasSelection={!!selectedNode}
            />

            <div ref={reactFlowWrapper} className="flex-1">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
                defaultViewport={{ x: 0, y: 0, zoom: 1.5 }}
                minZoom={0.2}
                maxZoom={4}
                snapToGrid
                fitView
              >
                <MiniMap 
                  nodeColor={(node) => {
                    switch (node.type) {
                      case 'message':
                        return '#93C5FD';
                      case 'question':
                        return '#C4B5FD';
                      case 'human':
                        return '#86EFAC';
                      case 'redirect':
                        return '#FFD700';
                      default:
                        return '#CBD5E1';
                    }
                  }}
                  className="bg-white border rounded-md shadow-sm"
                />
                <Controls />
                <Background gap={16} size={1} color="#f1f1f1" />
              </ReactFlow>
            </div>
          </div>

          {showProperties && (
            <PropertiesPanel
              selectedNode={selectedNode}
              onUpdateNode={updateNode}
              onClose={() => setShowProperties(false)}
            />
          )}
        </div>

        <div className="p-3 border-t bg-white text-xs text-gray-500 flex items-center justify-between">
          <div>
            Total de blocos: {nodes.length} | Conexões: {edges.length}
          </div>
          <div>
            Bot não publicado
          </div>
        </div>
      </div>

      {/* Save Bot Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Salvar Bot</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="bot-name">Nome do Bot</Label>
              <Input 
                id="bot-name" 
                placeholder="Atendimento Automático" 
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Dê um nome para identificar este fluxo de atendimento
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={saveFlow}>Salvar Bot</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

// Wrap with ReactFlowProvider
const BotBuilderPage = () => (
  <ReactFlowProvider>
    <FlowBuilder />
  </ReactFlowProvider>
);

export default BotBuilderPage;
