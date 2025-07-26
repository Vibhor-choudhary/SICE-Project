# 🧠 SICE Project — Smart Inventory Context Engine

AI-powered, real-time, context-aware inventory platform for edge retail systems.

---

## 📁 Project Folder Structure & Ownership

SICE-Project/
├── services/
│ ├── ingestion/ ← Ankit (Primary)
│ ├── anomaly-detection/ ← Ankit (Primary)
│ ├── forecasting/ ← Ankit (Primary)
│ ├── recommendation/ ← Mansi (Primary)
│ ├── graph-context/ ← Mansi (Primary)
│ ├── alerting/ ← Komal (Primary)
│ └── dashboard/ ← Komal (Primary)
├── chatbot/ ← Komal (Also owns this whole service)
├── infra/ ← Shared (Infrastructure setup)
├── frontend/ ← Shared (User interface)
├── data/ ← Shared (Data files, if any)
├── docs/ ← Shared (Team docs, workflows, prompts)
├── README.md ← Project instructions (you're here!)

yaml
Copy
Edit

---

## 👩‍💻 Team Responsibilities

| Member | Primary Areas |
|--------|----------------|
| Ankit  | Ingestion, Anomaly Detection, Forecasting |
| Mansi  | Recommendation, Context Graph |
| Komal  | Alerting, Dashboard, Chatbot |
| Shared | Frontend, Infra, Docs |

---

## 🧩 What’s with the `.gitkeep` Files?

Git doesn't track empty folders. So `.gitkeep` is a dummy file placed to:
- Prevent Git from ignoring empty directories
- Help teammates see the full folder structure

✅ You can delete it later once real code is added.

---

## 🔁 Daily Git & GitHub Workflow

Follow these steps **every time you work**:

### ✅ Step 1: Get the Latest Official Code
```bash
git pull origin main
✅ Step 2: Create a New Branch for Your Task
bash
Copy
Edit
git checkout -b feature/your-task-name
✅ Step 3: Write Code in Your Assigned Folder
Examples:

Komal → /chatbot/ or /services/alerting/

Ankit → /services/ingestion/

Mansi → /services/recommendation/

✅ Step 4: Save Progress (Commit Your Work)
bash
Copy
Edit
git add .
git commit -m "feat: added Kafka consumer for inventory ingestion"
✅ Step 5: Push Your Work to GitHub
bash
Copy
Edit
git push origin feature/your-task-name
🔍 Step 6: Open a Pull Request
Go to GitHub → SICE-Project

Click "Compare & Pull Request" or go to Pull Requests tab → New PR

Base = main, Compare = your feature branch

Fill in:

Title: Short summary of task

Description: What you built, how it works, anything to test

Assign Reviewer: Tag your teammate (Ankit, Mansi, or Komal)

✅ No PR can be merged without review approval.

✅ Step 7: Review, Update, and Merge
If changes are requested:

bash
Copy
Edit
# Make changes
git add .
git commit -m "fix: addressed review comments"
git push origin your-branch
Once approved, use Squash and Merge from GitHub.

📝 Commit Message Format
Use this format:

arduino
Copy
Edit
<type>: <short clear description>
Examples:

feat: added phantom inventory alert logic

fix: resolved bug in recommendation API

docs: added chatbot usage guide

Types to use:

feat: New feature

fix: Bug fix

docs: Documentation change

style: Formatting only

refactor: Code restructure

test: Adding tests

chore: Non-code maintenance

🌿 Branch Naming Convention
Task Type	Format Example
New Feature	feature/forecasting-api
Bug Fix	fix/api-timeout-issue
Refactor	refactor/alert-routing
Frontend UI	feature/product-card-ui
