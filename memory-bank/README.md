# Project Brief

This document serves as the foundation for all other project documentation. It is created at the project start and acts as the source of truth for the SICE Project’s scope, requirements, and goals.

## Core Requirements
- Build a world-class, data-reactive, and visually rich inventory and experience management system.
- Use Shadcn MCP server components for core UI structure.
- Integrate advanced animation and visual tools (Rive, Lottie, Spline, ShaderGradient, Icon8, 21st.dev) for modern, accessible, and responsive UI.
- Enforce accessibility, responsiveness, and theming consistency.

## Goals
- Deliver seamless, accessible, and thematically consistent user experiences.
- Maintain a disciplined, version-controlled workflow for all UI and system development.
- Ensure all documentation and code are maintainable, high-quality, and aligned with the project’s multi-tool frontend vision.

## Project Scope
- Inventory management
- Product experience customization
- Real-time data visualization and alerts
- Modular, scalable UI architecture
- Integration with live APIs and WebSockets

---

This document must be referenced and updated as the project evolves to ensure alignment across all teams and deliverables.# Product Context

## Why This Project Exists
SICE is designed to modernize inventory and experience management by combining robust data handling with advanced, interactive UI/UX.

## Problems It Solves
- Inefficient inventory tracking and management
- Lack of real-time, actionable insights
- Poor user engagement and accessibility in legacy systems
- Fragmented UI/UX across platforms

## How It Should Work
- Centralized dashboard for inventory and experience management
- Real-time updates and alerts via WebSockets/API
- Intuitive, visually engaging interfaces using MCP and animation tools
- Seamless integration of advanced visuals and microinteractions

## User Experience Goals
- Fast, accessible, and responsive interfaces
- Consistent theming and branding
- Delightful microinteractions and feedback
- Easy onboarding and clear workflows# Active Context

## Current Work Focus
- Initial project scaffolding and documentation
- Setting up MCP UI foundation
- Integrating global motion state store

## Recent Changes
- Created foundational documentation in memory-bank/
- Established project rules for UI and animation integration

## Next Steps
- Scaffold static UI with MCP components
- Integrate live data and animation tools
- Document feature-to-component mapping

## Active Decisions & Considerations
- Prioritize accessibility and responsiveness
- Use MCP blocks for all core UI before custom solutions
- Maintain strict version control and documentation discipline# System Patterns

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
- Global state triggers UI and animation updates# Tech Context

## Technologies Used
- React (with Next.js or similar)
- Shadcn MCP server components
- Rive, Lottie, Spline, ShaderGradient, Icon8, 21st.dev
- Zustand or Redux for state management
- WebSocket/API for real-time data

## Development Setup
- Node.js, npm/yarn
- Version control via Git
- Documentation in memory-bank/

## Technical Constraints
- All UI must use MCP blocks where possible
- Accessibility and responsiveness are non-negotiable
- Only approved animation/visual tools may be used

## Dependencies
- List maintained in package.json
- MCP and animation tool libraries# Progress

## What Works
- Project documentation scaffolding
- Initial MCP UI planning
- Rule enforcement for UI/animation integration

## What's Left to Build
- Static UI scaffolding with MCP
- Live data and animation integration
- Feature/component mapping documentation

## Current Status
- Foundation established, ready for UI and data work

## Known Issues
- None at this stage