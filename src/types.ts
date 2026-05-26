export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  color: string;
}

export interface PipelineNode {
  id: string;
  type: 'ingestion' | 'transformation' | 'analysis' | 'destination';
  label: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  rate: number; // records per second
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  message: string;
}
