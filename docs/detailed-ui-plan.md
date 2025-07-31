# Detailed UI Implementation Plan

This document provides a detailed breakdown of the UI structure and the corresponding `shadcn/ui` components to be used for the SICE project.

---

## 1. Login Page

### 1.1. Page Container
- **Component**: `card`
- **Notes**: This will serve as the main container for the login page, holding both the visual and form sections.

### 1.2. Visual Section (Left)
- **Animated Background**
  - **Component**: Custom Component
  - **Technology**: `ShaderGradient`
- **3D Logo/Graphic**
  - **Component**: Custom Component
  - **Technology**: `Spline`

### 1.3. Form Section (Right)
- **Company Logo**
  - **Component**: `avatar`
- **Title**
  - **Component**: `h1` (or similar heading)
  - **Content**: "Welcome to SICE"
- **Subtitle**
  - **Component**: `p` (or similar text element)
  - **Content**: "Smart Inventory, Smart Experience"
- **Email Input Field**
  - **Component**: `input` with `label`
  - **Label**: "Email"
  - **Placeholder**: "name@company.com"
- **Password Input Field**
  - **Component**: `input` with `label` and a `button` for the toggle icon.
  - **Label**: "Password"
- **Sign In Button**
  - **Component**: `button`
  - **Text**: "Sign In"
  - **Interaction**: On click, animate with `Rive` and validate the form.
- **SSO Login Buttons**
  - **Component**: `button`
  - **Variants**: Google and Microsoft
- **Footer Links**
  - **Component**: `a` (or similar link element)
  - **Links**: "Forgot Password?" and "Sign Up"

---

## 2. Dashboard Page

### 2.1. Main Container
- **Component**: `div` or `main`

### 2.2. Header
- **Component**: `card` or a custom component
- **Elements**:
  - **Logo & App Name**: `avatar` and `h2`
  - **Global Search Bar**: `input`
  - **User Profile Dropdown**: `dropdown-menu` triggered by an `avatar`.
    - **Items**: User Name, Settings, Logout (`button`)

### 2.3. Kanban Board Container
- **Board Header**
  - **Component**: `div`
  - **Elements**:
    - **Title**: `h2` with content "Deals Pipeline"
    - **Filters**: `select` for "Filter by Assignee" and "Filter by Status"
    - **Clear Filters Button**: `button`
    - **"Add New Deal" Button**: `button` which opens the "Add New Deal" modal.
- **Columns (Scrollable Horizontally)**
  - **Component**: `scroll-area`
  - **Columns**: "New", "Contacted", "Qualified", "Proposal Sent", "Negotiation", "Won", "Lost", "On Hold", "Archived".
  - **For each column**:
    - **Component**: `card`
    - **Header**: `div` containing a `h3` for the title and a `badge` for the deal count.
    - **Deal Cards (Draggable)**
      - **Component**: `card`
      - **Elements**:
        - **Drag Handle**: `icon`
        - **Deal Title**: `h4`
        - **Company Name**: `p`
        - **Deal Value**: `p`
        - **Assignee Avatar**: `avatar`
        - **Status Badge**: `badge` (e.g., "High Priority")

---

## 3. "Add New Deal" Modal

### 3.1. Modal Container
- **Component**: `dialog`

### 3.2. Modal Header
- **Component**: `dialog-header`
- **Elements**:
  - **Title**: `dialog-title` with content "Create New Deal"
  - **Close Button**: `button` with an "X" icon.

### 3.3. Modal Body
- **Component**: `form`
- **Fields**:
  - **Deal Title**: `input` with `label`. (Validation: Required)
  - **Company Name**: `input` with `label`. (Validation: Required)
  - **Deal Value**: `input` with `label`. (Validation: Numeric)
  - **Assignee**: `select` with `label`. (Options: List of team members)
  - **Status**: `select` with `label`. (Options: "High Priority", "Medium", "Low")
  - **Description**: `textarea` with `label`.

### 3.4. Modal Footer
- **Component**: `dialog-footer`
- **Buttons**:
  - **Cancel Button**: `button` to close the modal.
  - **Save Deal Button**: `button` with text "Save Deal".
    - **Interaction**: On click, validate, save, and show a success animation with `Lottie`.
