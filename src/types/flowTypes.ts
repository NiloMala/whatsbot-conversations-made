
export type NodePosition = {
  x: number;
  y: number;
};

export type NodeData = {
  label: string;
  content?: string;
  responseOptions?: ResponseOption[];
  mediaType?: "none" | "image" | "video" | "audio" | "file";
  mediaUrl?: string;
  buttons?: ButtonOption[];
  type: "message" | "question" | "condition" | "redirect" | "human";
};

export type ResponseOption = {
  id: string;
  text: string;
  nextNodeId?: string;
};

export type ButtonOption = {
  id: string;
  text: string;
  action: "link" | "phone" | "nextNode";
  value: string; // URL, phone number, or node ID
};

export type FlowNode = {
  id: string;
  type: string;
  position: NodePosition;
  data: NodeData;
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
  label?: string;
};

export type FlowData = {
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export type TriggerRule = {
  id: string;
  keyword: string;
  nodeId: string;
  isExactMatch: boolean;
  isActive: boolean;
};

export type BotConfig = {
  id: string;
  name: string;
  welcomeMessageNodeId: string;
  inactivityMessageNodeId?: string;
  inactivityTimeout?: number; // in minutes
  triggerRules: TriggerRule[];
  flowData: FlowData;
  createdAt: string;
  updatedAt: string;
};
