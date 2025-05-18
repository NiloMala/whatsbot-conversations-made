
import { Node, Edge } from '@xyflow/react';

export interface ResponseOption {
  id: string;
  text: string;
}

export interface NodeData {
  label: string;
  content?: string;
  type: 'message' | 'question' | 'human' | 'redirect';
  mediaType?: 'none' | 'image' | 'video' | 'audio' | 'document';
  mediaUrl?: string;
  responseOptions?: ResponseOption[];
}

export type FlowNode = Node<NodeData>;
export type FlowEdge = Edge;

export interface FlowData {
  name: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}
