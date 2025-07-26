# 🧠 SICE Project — Smart Inventory Context Engine

AI-powered, real-time, context-aware inventory platform built for next-gen retail systems — running on edge, powered by explainable AI, and enhanced with dynamic UI components.

---

## 📁 Project Folder Structure & Ownership

```bash
SICE-Project/
├── services/
│   ├── ingestion/            ← Ankit (Primary)
│   ├── anomaly-detection/    ← Ankit (Primary)
│   ├── forecasting/          ← Ankit (Primary)
│   ├── recommendation/       ← Mansi (Primary)
│   ├── graph-context/        ← Mansi (Primary)
│   ├── alerting/             ← Komal (Primary)
│   └── dashboard/            ← Komal (Primary)
├── chatbot/                  ← Komal (Also owns this whole service)
├── infra/                    ← Shared (Infrastructure setup)
├── frontend/                 ← Shared (User interface)
├── data/                     ← Shared (Data files, if any)
├── docs/                     ← Shared (Team docs, workflows, prompts)
├── README.md                 ← Project instructions (you're here!)
```

---

## 👥 Team Responsibilities

| Team Member | Responsibility Domains                              |
|-------------|-----------------------------------------------------|
| Ankit       | ingestion/, anomaly-detection/, forecasting/        |
| Mansi       | recommendation/, graph-context/                     |
| Komal       | alerting/, dashboard/, chatbot/                     |
| All         | frontend/, infra/, docs/                            |

---

## 📂 Why We Use `.gitkeep`

Git does **not** track empty folders by default. `.gitkeep` is a placeholder to:
- Keep our folder structure visible
- Ensure team clarity during early setup

✅ Once you add real code, feel free to delete `.gitkeep`.

---

## 🔁 Daily Git & GitHub Workflow

### 1️⃣ Pull the Latest Code
```bash
git pull origin main
```
> Ensures you're working on the most recent version

### 2️⃣ Create Your Feature Branch
```bash
git checkout -b feature/<task-name>
```
> Isolate your work and prevent overwriting others’ code

### 3️⃣ Do Your Work
Edit or add code in your assigned folder:
- Ankit → `/services/ingestion/`
- Mansi → `/services/recommendation/`
- Komal → `/chatbot/`, `/dashboard/`

### 4️⃣ Save Your Progress
```bash
git add .
git commit -m "feat: implemented XYZ"
```
> Save small, meaningful updates

### 5️⃣ Push to GitHub
```bash
git push origin feature/<task-name>
```
> Upload your branch to GitHub

### 6️⃣ Open a Pull Request (PR)
- Visit GitHub → `Pull Requests` → `New PR`
- Base = `main`, Compare = your feature branch
- Fill:
  - Title: Clear task name
  - Description: What’s in this PR, what to test
  - Reviewer: Tag your teammate (Ankit, Mansi, Komal)

### 7️⃣ Address Feedback & Merge
- Fix suggestions:
```bash
git add .
git commit -m "fix: feedback changes"
git push origin feature/<task-name>
```
- Once approved → `Squash and Merge`

---

## ✍️ Commit Message Style Guide

```bash
<type>: <short description>
```

**Examples:**
- `feat: added inventory prediction model`
- `fix: resolved dashboard UI bug`
- `docs: updated chatbot setup instructions`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 🌱 Branch Naming Guide

| Task Type   | Example Branch Name              |
|-------------|----------------------------------|
| Feature     | `feature/store-map-widget`       |
| Bug Fix     | `fix/api-retry-timeout`          |
| Refactor    | `refactor/alerting-handler`      |
| UI Update   | `feature/product-card-component` |

---

## ⚙️ How to Run Frontend 

```bash
cd frontend
npm install
npm run dev
```

💡 Use any AI’s built-in terminal and Git sidebar for easier flow.

---

## 💡 Best Practices (Frontend + AI)

### 📦 Components
Organize reusable UI elements:
```bash
/components/ui/
  Button.jsx
  InputField.jsx
  Badge.jsx
  Modal.jsx
  Loader.jsx
```

### 🎨 Assets & Visual Tools
| Tool         | Purpose                                |
|--------------|-----------------------------------------|
| Rive         | Button morphs, chat avatar, live icons |
| LottieFiles  | Animations (e.g., success, warning)     |
| Spline       | 3D visuals, hero sections               |
| ShaderGradient | Live gradient backgrounds            |
| Icon8        | App icons (search, filter, etc.)        |
| 21st.dev     | Trendy inputs, forms, panels            |

### 🧠 AI Tips
- Track branch 
- Test prompts in context: `/docs/prompts.md`
- Keep commits and folders atomic (1 component = 1 folder)

---

## 📋 Collaboration Checklist

- [ ] Pull from `main` before creating a branch
- [ ] Commit frequently with clear messages
- [ ] Push updates after each coding session
- [ ] Create PRs early and tag reviewers
- [ ] Be open to feedback and ask for help

---

## 📚 Learning Resources

- 📘 [Git Basics — Atlassian](https://www.atlassian.com/git/tutorials)
- 💬 [Cursor AI Docs](https://docs.cursor.sh)
- 🔁 [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

## ✨ Let’s build something exceptional — one clean commit at a time!
