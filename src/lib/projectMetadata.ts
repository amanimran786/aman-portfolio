export interface ProjectMetadata {
  emoji: string;
  displayName: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  primaryGradient: string;
  accentColor: string;
  keyFeatures: string[];
  impact: string;
}

export const PROJECT_METADATA: Record<string, ProjectMetadata> = {
  worldview: {
    emoji: '🌍',
    displayName: 'WorldView',
    shortDescription: 'Global Data Intelligence Platform',
    longDescription: 'Interactive geospatial visualization and analytics platform enabling real-time data insights across global markets and operations',
    category: 'Data Analytics',
    primaryGradient: 'from-cyan-600 to-blue-700',
    accentColor: 'cyan',
    keyFeatures: ['Real-time mapping', 'Data aggregation', 'Analytics dashboard', 'Global coverage'],
    impact: 'Enterprise-grade intelligence for strategic decision-making',
  },
  'jarvis-ai': {
    emoji: '🤖',
    displayName: 'JARVIS AI',
    shortDescription: 'Advanced Intelligence Assistant',
    longDescription: 'Sophisticated AI-powered assistant leveraging natural language processing and machine learning for intelligent automation and decision support',
    category: 'AI & ML',
    primaryGradient: 'from-purple-600 to-pink-700',
    accentColor: 'purple',
    keyFeatures: ['NLP processing', 'Voice integration', 'ML inference', 'Context awareness'],
    impact: 'Reduces operational overhead through intelligent automation',
  },
  'AI-Malware-Detection': {
    emoji: '🛡️',
    displayName: 'Malware Shield',
    shortDescription: 'ML-Powered Threat Detection',
    longDescription: 'Enterprise security system utilizing advanced machine learning algorithms to detect, analyze, and prevent malware threats in real-time',
    category: 'Cybersecurity',
    primaryGradient: 'from-red-600 to-orange-700',
    accentColor: 'red',
    keyFeatures: ['Pattern detection', 'Behavioral analysis', 'Real-time alerts', 'Threat intelligence'],
    impact: 'Protects enterprise infrastructure from advanced cyber threats',
  },
  'PhishingDetectorExtension': {
    emoji: '🔍',
    displayName: 'Phishing Guard',
    shortDescription: 'Intelligent Security Extension',
    longDescription: 'Cutting-edge browser extension that provides real-time protection against phishing attacks, fraudulent websites, and social engineering threats',
    category: 'Web Security',
    primaryGradient: 'from-amber-600 to-yellow-700',
    accentColor: 'amber',
    keyFeatures: ['URL verification', 'Content analysis', 'Real-time warnings', 'User education'],
    impact: 'Prevents credential theft and financial fraud',
  },
  'FinGuard': {
    emoji: '💰',
    displayName: 'FinGuard',
    shortDescription: 'Financial Security Platform',
    longDescription: 'Comprehensive fintech security suite providing fraud prevention, transaction monitoring, and compliance management for financial institutions',
    category: 'FinTech',
    primaryGradient: 'from-green-600 to-emerald-700',
    accentColor: 'green',
    keyFeatures: ['Fraud detection', 'Transaction monitoring', 'Compliance tracking', 'Risk assessment'],
    impact: 'Secures financial operations and prevents losses',
  },
  'FoodBankInventorySystem': {
    emoji: '🍎',
    displayName: 'FoodBank Pro',
    shortDescription: 'Logistics & Inventory Management',
    longDescription: 'Sophisticated inventory management and distribution system designed for food banks to optimize supply chain, reduce waste, and maximize community impact',
    category: 'Management',
    primaryGradient: 'from-orange-500 to-yellow-600',
    accentColor: 'orange',
    keyFeatures: ['Inventory tracking', 'Distribution optimization', 'Waste reduction', 'Community impact'],
    impact: 'Increases food distribution efficiency and community reach',
  },
};

export function getProjectMetadata(repoName: string): ProjectMetadata {
  const key = repoName.toLowerCase().replace(/[-_]/g, '-');
  return (
    PROJECT_METADATA[key] || {
      emoji: '⚡',
      displayName: repoName,
      shortDescription: 'Innovative technical solution',
      longDescription: 'Production-grade implementation with cutting-edge technology',
      category: 'Software Engineering',
      primaryGradient: 'from-slate-600 to-slate-700',
      accentColor: 'slate',
      keyFeatures: ['Production-ready', 'Scalable', 'Maintainable'],
      impact: 'Delivers value through innovative engineering',
    }
  );
}
