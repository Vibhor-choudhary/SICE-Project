
# 🧭 SICE Navigation & UI Structure

This markdown outlines the navigation flow, login page structure, dashboard layout, and modal design for the Smart Inventory Context Engine (SICE) frontend application.

---

## 🔀 Navigation Flow

```
- Navigation Flow
  ├─ Authenticated User Flow
  │  ├─ Login Page
  │  │  └─ On Success → Redirect to Dashboard
  │  └─ Dashboard Page
  │     ├─ View Deals (Kanban)
  │     ├─ Add/Edit Deal (Modal)
  │     └─ Logoutaa
  └─ Unauthenticated User Flow
     └─ Redirect to Login Page
```

---

## 🔐 Login Page Structure

```
- Page Container
  ├─ Visual Section (Left)
  │  ├─ Animated Background (ShaderGradient)
  │  └─ 3D Logo/Graphic (Spline)
  └─ Form Section (Right)
     ├─ Company Logo
     ├─ Title: "Welcome to SICE"
     ├─ Subtitle: "Smart Inventory, Smart Experience"
     ├─ Email Input Field
     │  ├─ Label: "Email"
     │  └─ Placeholder: "name@company.com"
     ├─ Password Input Field
     │  ├─ Label: "Password"
     │  └─ Toggle visibility icon
     ├─ Sign In Button
     │  ├─ Text: "Sign In"
     │  └─ On Click → Animate (Rive) & Validate
     ├─ SSO Login Buttons
     │  ├─ Google Button
     │  └─ Microsoft Button
     └─ Footer Links
        ├─ Forgot Password?
        └─ Sign Up
```

---

## 📊 Dashboard Page Structure

```
- Main Container
  ├─ Header
  │  ├─ Logo & App Name
  │  ├─ Global Search Bar
  │  └─ User Profile Dropdown
  │     ├─ Avatar
  │     ├─ User Name
  │     ├─ Settings
  │     └─ Logout Button
  └─ Kanban Board Container
     ├─ Board Header
     │  ├─ Title: "Deals Pipeline"
     │  ├─ Filters
     │  │  ├─ Filter by Assignee
     │  │  ├─ Filter by Status
     │  │  └─ Clear Filters Button
     │  └─ "Add New Deal" Button
     │     └─ On Click → Open "Add New Deal" Modal
     └─ Columns (Scrollable Horizontally)
        ├─ Column: "New"
        ├─ Column: "Contacted"
        ├─ Column: "Qualified"
        ├─ Column: "Proposal Sent"
        ├─ Column: "Negotiation"
        ├─ Column: "Won"
        ├─ Column: "Lost"
        ├─ Column: "On Hold"
        └─ Column: "Archived"
           └─ For each column:
              ├─ Column Header
              │  ├─ Title (e.g., "New")
              │  └─ Deal Count Badge
              └─ Deal Cards (Draggable)
                 └─ For each card:
                    ├─ Drag Handle (Icon)
                    ├─ Deal Title
                    ├─ Company Name
                    ├─ Deal Value
                    ├─ Assignee Avatar
                    └─ Status Badge (e.g., "High Priority")
```

---

## 📝 "Add New Deal" Modal Structure

```
- Modal Container (Dialog)
  ├─ Modal Header
  │  ├─ Title: "Create New Deal"
  │  └─ Close Button (X Icon)
  ├─ Modal Body (Form)
  │  ├─ Deal Title Input
  │  │  └─ Validation: Required
  │  ├─ Company Name Input
  │  │  └─ Validation: Required
  │  ├─ Deal Value Input
  │  │  └─ Validation: Numeric
  │  ├─ Assignee Dropdown
  │  │  └─ Options: List of team members
  │  ├─ Status Dropdown
  │  │  └─ Options: "High Priority", "Medium", "Low"
  │  └─ Description Textarea
  └─ Modal Footer
     ├─ Cancel Button
     │  └─ On Click → Close Modal
     └─ Save Deal Button
        ├─ Text: "Save Deal"
        └─ On Click → Validate, Save, & Animate Success (Lottie)
```
