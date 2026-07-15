export const personalInfo = {
  name: "Sabry Awad",
  title: "Full-Stack + AI Developer | Healthcare Tech Specialist",
  subtitle: "Rust | Go | TypeScript | Python | Arabic & English",
  avatar:
    "https://www.upwork.com/profile-portraits/c1gaUkUqHwgdh2g4LMDcA3QwkvNaJLukWbvcu_Bp_E3_v__O4ob5OvTphjhxyB0brZ",
  bio: "Full-Stack Developer with 5+ years building AI-powered applications for healthcare and beyond. Native Arabic speaker with expertise in LLM integration (OpenAI, Gemini, Anthropic), WhatsApp Business API, and cross-platform development. Ex-Pharmacist bringing unique healthcare domain knowledge to software engineering. Specialized in React, TypeScript, Rust, Go, Python (FastAPI), and bilingual (Arabic/English) application development.",
  location: "Egypt 🇪🇬",
  languages: ["Arabic (Native)", "English (Fluent)"],
  contact: {
    email: "dr.sabry1997@gmail.com",
    phone: "+201030320366",
    github: "sabryio",
    linkedin: "sabry-awad-46b16a131",
    twitter: "Sabry_awad97",
    portfolio: "https://sabry-resume.netlify.app/",
  },
  social: {
    facebook: "https://facebook.com/mmaia1997",
    instagram: "https://instagram.com/dr.sabry97",
    twitter: "https://x.com/Sabry_awad97",
  },
};

export const education = [
  {
    id: 1,
    date: "2016 - 2020",
    title: "Bachelor of Pharmacy",
    institution: "Al Azhar University",
    description:
      "Comprehensive healthcare education providing deep understanding of medical systems, patient care, regulatory compliance, and data analysis. This unique background enables me to build software that truly serves healthcare users with domain expertise.",
  },
  {
    id: 2,
    date: "2024",
    title: "Complete Full-Stack JavaScript Developer",
    institution: "Code with Mosh",
    description:
      "Comprehensive full-stack training: React 18+, Next.js 13+, Node.js, TypeScript, Redux, Testing, SQL, MongoDB. Built production-ready applications with modern architecture patterns.",
  },
  {
    id: 3,
    date: "2024",
    title: "Complete Python Programming Course",
    institution: "Code with Mosh",
    description:
      "Mastered Python from beginner to pro: data structures, algorithms, OOP, FastAPI, and practical application development with 3 real-world projects.",
  },
  {
    id: 4,
    date: "2024",
    title: "Ultimate React Native Series",
    institution: "Code with Mosh",
    description:
      "Complete training in building and distributing professional-quality mobile apps with React Native for cross-platform development.",
  },
  {
    id: 5,
    date: "2024",
    title: "Ultimate Docker Course",
    institution: "Code with Mosh",
    description:
      "Mastered Docker containerization, orchestration, and deployment for modern application development and DevOps workflows.",
  },
  {
    id: 6,
    date: "2024",
    title: "Ultimate Data Structures & Algorithms",
    institution: "Code with Mosh",
    description:
      "Comprehensive training in data structures and algorithms to write better, faster code and ace technical interviews.",
  },
  {
    id: 7,
    date: "2024",
    title: "Ultimate Design Patterns Series",
    institution: "Code with Mosh",
    description:
      "Learned design patterns to write maintainable and extensible code for senior-level software engineering.",
  },
  {
    id: 8,
    date: "2024",
    title: "Clean Coding and Refactoring",
    institution: "Code with Mosh",
    description:
      "Expert techniques for writing and maintaining clean, maintainable, and professional production code.",
  },
];

export const projects = [
  {
    id: 1,
    date: "2025",
    title: "AI Knowledge Assistant - Production RAG System",
    description:
      "Built production-ready RAG system with Gemini 2.5 integration, Docker AI, local embeddings, and vector databases (Weaviate). Implemented streaming responses, context management for multi-turn conversations, and intelligent document processing. Serving healthcare professionals with AI-powered knowledge retrieval.",
    tags: [
      "Python",
      "FastAPI",
      "Gemini",
      "PostgreSQL",
      "Weaviate",
      "Docker",
      "RAG",
      "LLM",
    ],
    github: "https://github.com/sabry-awad97/ai-knowledge-assistant-python",
  },
  {
    id: 2,
    date: "2024",
    title: "MediTrack - Healthcare Inventory Management System",
    description:
      "Architected production-ready desktop application using Tauri (Rust + React) for pharmacy inventory management. Built 91+ React components, 18 custom hooks, comprehensive state management with TanStack Query/Router. Implemented ML-based prediction algorithms achieving 80-87% accuracy. Designed PostgreSQL schema with SeaORM, achieving sub-2-second page loads through caching optimization.",
    tags: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "PostgreSQL",
      "TanStack",
      "Healthcare",
    ],
  },
  {
    id: 3,
    date: "2025",
    title: "WhatsApp Business API Integration Platform",
    description:
      "Developed WhatsApp Business API integration for AI-powered customer interactions. Implemented message handling, webhook processing, and real-time chat interfaces with Arabic text support. Built RESTful APIs with Node.js and integrated with LLM services for intelligent automated responses.",
    tags: [
      "WhatsApp API",
      "Node.js",
      "TypeScript",
      "WebSocket",
      "Arabic",
      "LLM",
    ],
  },
  {
    id: 4,
    date: "2025",
    title: "Bilingual Healthcare Portal (Arabic/English)",
    description:
      "Built dual-portal architecture for healthcare professionals and patients with full RTL support. Implemented Arabic typography, BiDi text handling, i18n with react-i18next, and culturally appropriate UI patterns. Features include document management, real-time chat, and role-based access control.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "i18n",
      "RTL",
      "Arabic",
      "PostgreSQL",
    ],
  },
  {
    id: 5,
    date: "2025",
    title: "MCP-Based AI Agent System",
    description:
      "Created intelligent agent system using Model Context Protocol (MCP) for context-aware automation. Integrated multiple LLM providers (OpenAI, Anthropic, Gemini, Ollama) with custom RAG pipelines and vector databases (Pinecone, Chroma) for enhanced contextual understanding and autonomous task execution.",
    tags: [
      "MCP",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Pinecone",
      "TypeScript",
    ],
    github: "https://github.com/sabry-awad97/spec-kit-mcp",
  },
  {
    id: 6,
    date: "2025",
    title: "Reratui - React-Inspired TUI Framework for Rust",
    description:
      "Created and published open-source TUI framework on crates.io bringing React's component model and hooks system to Rust terminal applications. Implemented fiber architecture with efficient reconciliation, 20+ hooks (use_state, use_effect, use_query), async-first design with data fetching/caching. Built on ratatui with full documentation, 10+ examples, and CI/CD pipeline.",
    tags: ["Rust", "Open Source", "TUI", "Async", "Tokio", "Crates.io"],
    github: "https://github.com/sabry-awad97/reratui",
  },
  {
    id: 7,
    date: "2024",
    title: "Cross-Platform Desktop Apps with Tauri",
    description:
      "Developed high-performance cross-platform desktop applications using Tauri (Rust + React). Achieved 70% smaller bundle size compared to Electron. Implemented native system integrations, secure IPC communication, and auto-updates. Deployed on Windows, macOS, and Linux.",
    tags: ["Tauri", "Rust", "React", "TypeScript", "Cross-Platform"],
    github: "https://github.com/sabry-awad97/tauri-nexus",
  },
  {
    id: 8,
    date: "2024",
    title: "High-Performance Microservices Backend",
    description:
      "Architected microservices backend using Go (Gin, Fiber) and Rust (Axum, Rocket). Achieved sub-millisecond response times with Redis caching and optimized database queries. Implemented RESTful APIs, GraphQL endpoints, and event-driven architecture. Deployed with Docker and CI/CD pipelines.",
    tags: [
      "Go",
      "Rust",
      "Docker",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    id: 9,
    date: "2023",
    title: "AI-Powered Healthcare Analytics Platform",
    description:
      "Built comprehensive healthcare data analysis and visualization platform with AI-driven insights. Integrated LLM capabilities for intelligent data interpretation and automated reporting. Implemented real-time dashboards using React, TypeScript, and PostgreSQL. Served 10,000+ active users.",
    tags: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "OpenAI",
      "Healthcare",
    ],
  },
  {
    id: 10,
    date: "2023",
    title: "JSBook - Interactive JavaScript Notebook",
    description:
      "Built Jupyter-like notebook application for JavaScript with real-time code execution and preview. Developed Express.js API for file-based storage with WebSocket integration for live synchronization. Implemented resizable cells, markdown editor, and in-browser code bundling.",
    tags: ["React", "Node.js", "Express", "WebSocket", "Markdown"],
  },
];

export const skills = {
  languages: [
    { name: "TypeScript", icon: "📘", category: "primary" },
    { name: "JavaScript (ES6+)", icon: "⚡", category: "primary" },
    { name: "Python", icon: "🐍", category: "primary" },
    { name: "Rust", icon: "🦀", category: "primary" },
    { name: "Go", icon: "🐹", category: "primary" },
    { name: "Arabic (Native)", icon: "🇪🇬", category: "language" },
    { name: "English (Fluent)", icon: "🇬🇧", category: "language" },
  ],
  frontend: [
    { name: "React.js", icon: "⚛️", category: "framework" },
    { name: "Next.js", icon: "▲", category: "framework" },
    { name: "TypeScript", icon: "📘", category: "language" },
    { name: "Redux Toolkit", icon: "🔄", category: "state" },
    { name: "Zustand", icon: "🐻", category: "state" },
    { name: "TanStack Query", icon: "🔍", category: "state" },
    { name: "TanStack Router", icon: "🛣️", category: "routing" },
    { name: "Tailwind CSS", icon: "🎨", category: "styling" },
    { name: "Shadcn UI", icon: "🎭", category: "ui" },
    { name: "Material-UI", icon: "🎨", category: "ui" },
    { name: "React Hooks", icon: "🪝", category: "pattern" },
    { name: "Context API", icon: "🔗", category: "state" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", category: "runtime" },
    { name: "Python (FastAPI)", icon: "🐍", category: "framework" },
    { name: "Python (Flask)", icon: "🐍", category: "framework" },
    { name: "Express.js", icon: "⚙️", category: "framework" },
    { name: "Hono", icon: "🔥", category: "framework" },
    { name: "Go (Fiber)", icon: "⚡", category: "framework" },
    { name: "Go (Gin)", icon: "🐹", category: "framework" },
    { name: "Rust (Axum)", icon: "🦀", category: "framework" },
    { name: "Rust (Rocket)", icon: "🚀", category: "framework" },
    { name: "RESTful APIs", icon: "🔌", category: "api" },
    { name: "GraphQL", icon: "📊", category: "api" },
    { name: "WebSocket", icon: "🔌", category: "realtime" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "🐘", category: "sql" },
    { name: "MongoDB", icon: "🍃", category: "nosql" },
    { name: "Redis", icon: "⚡", category: "cache" },
    { name: "Pinecone", icon: "🌲", category: "vector" },
    { name: "Chroma", icon: "🎨", category: "vector" },
    { name: "Weaviate", icon: "🔍", category: "vector" },
  ],
  ai: [
    { name: "OpenAI", icon: "🤖", category: "llm" },
    { name: "Gemini", icon: "🪶", category: "llm" },
    { name: "Anthropic", icon: "🧩", category: "llm" },
    { name: "Ollama", icon: "🧭", category: "llm" },
    { name: "LangChain", icon: "🔗", category: "framework" },
    { name: "MCP", icon: "🎯", category: "protocol" },
    { name: "RAG Pipelines", icon: "📚", category: "pattern" },
    { name: "Vector Databases", icon: "🔢", category: "storage" },
    { name: "Streaming Responses", icon: "📡", category: "feature" },
  ],
  messaging: [
    { name: "WhatsApp Business API", icon: "💬", category: "platform" },
    { name: "WebSocket", icon: "🔌", category: "protocol" },
    { name: "Real-time Chat", icon: "�", category: "feature" },
  ],
  i18n: [
    { name: "react-i18next", icon: "🌍", category: "library" },
    { name: "next-intl", icon: "🌐", category: "library" },
    { name: "RTL Support", icon: "↔️", category: "feature" },
    { name: "Arabic Typography", icon: "�", category: "feature" },
    { name: "BiDi Text", icon: "↔️", category: "feature" },
  ],
  crossPlatform: [
    { name: "Tauri", icon: "�", category: "framework" },
    { name: "Electron", icon: "⚡", category: "framework" },
    { name: "React Native", icon: "�", category: "framework" },
  ],
  devops: [
    { name: "Docker", icon: "🐳", category: "container" },
    { name: "GitHub Actions", icon: "�", category: "ci" },
    { name: "CI/CD", icon: "�", category: "process" },
    { name: "Git", icon: "🔀", category: "vcs" },
    { name: "Vercel", icon: "▲", category: "hosting" },
    { name: "Netlify", icon: "🌐", category: "hosting" },
  ],
  testing: [
    { name: "Vitest", icon: "🧪", category: "unit" },
    { name: "React Testing Library", icon: "🧪", category: "component" },
    { name: "Cypress", icon: "🌲", category: "e2e" },
    { name: "Postman", icon: "📮", category: "api" },
  ],
  tools: [
    { name: "VS Code", icon: "💻", category: "editor" },
    { name: "Figma", icon: "🎨", category: "design" },
    { name: "Jira", icon: "📋", category: "pm" },
    { name: "Trello", icon: "�", category: "pm" },
  ],
};

export const achievements = [
  {
    id: 1,
    title: "Published 4 Rust Crates",
    description:
      "Open-source terminal/CLI tools with 1,000+ downloads on crates.io",
    icon: "📦",
  },
  {
    id: 2,
    title: "205+ Open Source Repositories",
    description: "Active contributor to open-source community",
    icon: "🌟",
  },
  {
    id: 3,
    title: "Healthcare Domain Expertise",
    description:
      "Pharmacist background enabling unique insights into medical software",
    icon: "💊",
  },
  {
    id: 4,
    title: "Bilingual Development",
    description: "Native Arabic speaker with fluent English for global reach",
    icon: "🌍",
  },
  {
    id: 5,
    title: "5+ Years Experience",
    description: "Production systems serving 10,000+ users",
    icon: "⏱️",
  },
  {
    id: 6,
    title: "AI/LLM Integration Expert",
    description: "Production RAG systems with multiple LLM providers",
    icon: "🤖",
  },
];

export const keyCompetencies = [
  "Full-Stack Development (React, Next.js, TypeScript, Python, Node.js)",
  "AI Integration (OpenAI, Gemini, Anthropic, LLM Orchestration)",
  "WhatsApp Business API & Messaging Platforms",
  "Bilingual Development (Arabic/English, RTL, i18n)",
  "Healthcare Domain Expertise (Ex-Pharmacist)",
  "Cross-Platform Development (Tauri, React Native)",
  "Backend Engineering (Python/FastAPI, Go, Rust, Node.js)",
  "Database Design (PostgreSQL, MongoDB, Redis, Vector DBs)",
  "DevOps & CI/CD (Docker, GitHub Actions)",
  "State Management (Redux, Zustand, TanStack Query)",
  "API Development (RESTful, GraphQL, WebSocket)",
  "Performance Optimization & Caching",
];
