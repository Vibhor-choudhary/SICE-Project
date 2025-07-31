# System Patterns

## System Architecture
- Modular, component-driven frontend using Shadcn MCP
- Global motion state store for animation/data sync
- Real-time data via WebSocket/API integration

## Key Technical Decisions
- MCP as the primary UI framework
- Advanced visuals via Rive, Lottie, Spline, ShaderGradient, Icon8, 21st.dev
- Strict accessibility and theming enforcement

## Design Patterns in Use
- Container/presenter separation for UI logic
- State management via Zustand/Redux
- Feature-to-component mapping for maintainability

## Component Relationships
- MCP blocks as layout foundation
- Animation/visual components embedded within MCP containers
- Global state triggers UI and animation updates