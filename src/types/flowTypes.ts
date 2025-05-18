
import { Node, Edge } from '@xyflow/react';

export interface ResponseOption {
  id: string;
  text: string;
}

export interface ButtonOption {
  id: string;
  text: string;
  action: 'link' | 'phone' | 'nextNode';
  value: string;
}

export interface NodeData {
  label: string;
  content?: string;
  type: 'message' | 'question' | 'human' | 'redirect';
  mediaType?: 'none' | 'image' | 'video' | 'audio' | 'document' | 'file';
  mediaUrl?: string;
  responseOptions?: ResponseOption[];
  buttons?: ButtonOption[];
  [key: string]: unknown; // Add index signature to satisfy Record<string, unknown>
}

export type FlowNode = Node<NodeData>;
export type FlowEdge = Edge;

export interface FlowData {
  name: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}
