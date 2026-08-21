# FlowForge

The live application is the Next.js project inside [`enterprise-project-platform`](enterprise-project-platform/).

## Deploy The Application

This is not a plain HTML project, so do not open the repository with Live Server or deploy it as GitHub Pages. GitHub Pages only serves static files and cannot run the NextAuth, Google OAuth, or password-reset API routes.

For a GitHub-connected deployment:

1. Import `Sreenayak/FlowForge` into Vercel.
2. Set **Root Directory** to `enterprise-project-platform`.
3. Leave the framework as **Next.js** and use the default build command.
4. Add the environment variables from `enterprise-project-platform/.env.example`.
5. Add the Vercel URL to Google OAuth as `https://YOUR-DOMAIN/api/auth/callback/google`.

Run locally from the application directory:

```powershell
cd enterprise-project-platform
npm install
npm run dev
```

Open `http://localhost:3000`.

---

# Enterprise Project Management & Team Collaboration

> A unified platform for managing, building, documenting, communicating, and delivering software products with a team from a single workspace.

## 📌 Overview

Modern software teams often depend on multiple specialized platforms for different parts of the product-development process. Project management may happen in one application, development in another, communication in another, documentation somewhere else, and file management through yet another service.

This fragmentation creates:

* Constant context switching
* Scattered project information
* Repeated or duplicated work
* Difficulty maintaining complete project context
* Communication gaps between team members
* Reduced visibility into project progress
* Inefficient collaboration between developers, managers, and clients

**Enterprise Project Management & Team Collaboration** aims to solve this problem by bringing these workflows together into one unified platform.

The platform is designed to provide a shared environment where teams can manage projects, communicate, document their work, track development, collaborate with clients, and monitor project performance without continuously moving between disconnected tools.

---

## 🎯 Problem Statement

Software teams increasingly rely on multiple tools such as project-management systems, documentation platforms, communication applications, development platforms, file-storage services, and reporting tools.

While each tool may solve a specific problem effectively, the overall workflow becomes fragmented.

Our platform addresses this fragmentation by creating a unified workspace for the complete product-development lifecycle.

Instead of:

```text
Project Management → Platform A
Development        → Platform B
Communication      → Platform C
Documentation      → Platform D
File Management    → Platform E
Meetings           → Platform F
Analytics          → Platform G
```

the goal is:

```text
              ┌──────────────────────────────┐
              │   Unified Team Workspace     │
              ├──────────────────────────────┤
              │ Projects                     │
              │ Tasks & Sprints              │
              │ Documentation                │
              │ Communication                │
              │ Files                        │
              │ Meetings                     │
              │ Time Tracking                │
              │ Analytics                    │
              │ Client Collaboration         │
              │ AI Productivity              │
              └──────────────────────────────┘
```

---

## 💡 Our Solution

The platform provides a centralized environment where software teams can work together throughout the product lifecycle.

A team can:

1. Create an account
2. Create a workspace
3. Configure the workspace
4. Invite team members
5. Create and manage projects
6. Plan tasks and sprints
7. Build and track the product
8. Communicate with the team
9. Create and maintain documentation
10. Manage project files
11. Conduct meetings
12. Track working time
13. Monitor project performance
14. Involve clients in the development process
15. Share deliverables
16. Receive client feedback and approval
17. Continue monitoring and improving the product

The goal is to provide a **single source of project context** rather than forcing teams to repeatedly switch between disconnected platforms.

---

## 👥 Target Users

The primary target users are:

### 1. Software Development Teams

Developers and technical teams can collaborate on product development while keeping tasks, communication, documentation, files, and project information connected.

### 2. Startups and Small Companies

Small teams can manage their complete product-development workflow from a centralized workspace without needing to assemble a large collection of disconnected tools.

### 3. Freelancers and Small Project Teams

Freelancers and compact teams can manage projects, communicate with clients, organize documentation, track work, and deliver products from one environment.

---

# ✨ Core Capabilities

## 🏢 Workspace Management

Users can create and configure workspaces for their teams.

Planned capabilities include:

* Create workspace
* Upload workspace logo
* Invite members
* Join through invitation links
* Manage departments
* Configure permissions

---

## 📊 Dashboard

The dashboard provides a centralized overview of workspace and project activity.

It is planned to display:

* Active projects
* Pending tasks
* Upcoming deadlines
* Sprint progress
* Team activity
* Notifications
* Calendar
* Productivity score

---

## 📁 Project Management

Each project can contain:

* Project name
* Description
* Status
* Priority
* Deadline
* Team members
* Milestones
* Files
* Wiki/documentation
* Activity timeline

---

## ✅ Task Management

Tasks can contain:

* Title
* Description
* Assignee
* Reporter
* Labels
* Priority
* Status
* Due date
* Attachments
* Checklists
* Story points

Additional task capabilities:

* Subtasks
* Dependencies
* Recurring tasks
* Bulk actions

---

## 📋 Kanban Board

The platform will provide a drag-and-drop Kanban workflow.

Default workflow:

```text
Backlog
   ↓
To Do
   ↓
In Progress
   ↓
Code Review
   ↓
Testing
   ↓
Completed
```

Users will also be able to customize workflow columns.

---

## 🏃 Sprint Management

Teams can create sprints containing:

* Sprint name
* Sprint goal
* Duration
* Capacity
* Sprint backlog

Sprint tracking will include:

* Burndown charts
* Velocity
* Sprint completion
* Blockers

---

## 📚 Collaborative Documentation

Each project will include a collaborative documentation/wiki system.

Planned capabilities:

* Rich-text editor
* Markdown support
* Code blocks
* Tables
* Images
* Version history
* Search
* Nested pages

This allows teams to keep project knowledge connected to the project instead of storing important information somewhere completely separate.

---

## 📅 Calendar

The calendar will provide visibility into:

* Deadlines
* Meetings
* Sprint dates
* Holidays
* Team availability

---

## 📂 File Management

The platform will use **Cloudinary** for storage.

Planned file capabilities include:

* Image uploads
* PDF uploads
* Video uploads
* ZIP files
* Document uploads
* Folder organization
* File preview
* File download
* Version history

Files can also be associated with relevant project activities such as tasks, communication, and documentation.

---

# 💬 Team Communication

The platform will provide integrated communication capabilities including:

* Project channels
* Direct messages
* Threaded conversations
* @mentions
* Emoji reactions
* File sharing
* Voice chats
* Live meetings

The platform is also planned to support integrations with external meeting services such as:

* Zoom
* Google Meet
* Microsoft Teams

Real-time communication is intended to reduce the need to move conversations to separate applications.

---

# 🗓️ Meeting Management

Teams will be able to create meetings containing:

* Agenda
* Participants
* Notes
* Action items
* Calendar invitations

Meeting history will also be stored within the platform.

---

# ⏱️ Time Tracking

Team members will be able to:

* Start a timer
* Stop a timer
* Manually log time
* Maintain daily work logs

Managers will be able to view:

* Productivity reports
* Hours by project
* Team utilization

---

# 🔔 Notifications

The platform will provide notifications for important project events, including:

* Task assignment
* Task completion
* Deadline reminders
* Mentions
* File uploads
* Comments
* Sprint started
* Sprint ended

---

# 🔎 Global Search

A centralized search system is planned to search across:

* Projects
* Tasks
* Members
* Documents
* Messages
* Files

The goal is to make project information discoverable without requiring users to search through multiple external applications.

---

# 📈 Analytics

The analytics dashboard will provide visibility into:

* Project progress
* Sprint velocity
* Task completion rate
* Team productivity
* Time logged
* Workload distribution
* Burnup/burndown charts
* Project health score

---

# 🤖 AI Features

The platform will incorporate AI capabilities focused on practical project-management problems.

### AI Project Risk Prediction

Analyze project information and identify potential risks, delays, or problematic areas.

### AI Workspace Chatbot

Allow users to ask questions about information available within their workspace and receive relevant answers.

The chatbot will need to respect the user's permissions and access scope.

### AI Meeting Summarization

Generate concise summaries from meeting information and help identify important discussion points and action items.

---

# 👤 User Roles & Permissions

The platform will use role-based access control.

## Workspace Owner

Can:

* Create workspace
* Invite members
* Manage billing
* Create projects
* Assign roles
* View analytics
* Manage integrations

## Project Manager

Can:

* Create projects
* Create sprints
* Assign tasks
* Approve work
* Generate reports
* Manage milestones

## Team Member

Can:

* View assigned tasks
* Update task status
* Upload files
* Comment
* Log time
* Create subtasks

## Client

Clients receive controlled access to the project.

They can:

* View project progress
* View shared documents
* Observe development progress
* Communicate with company employees
* Provide feedback
* Review deliverables
* Approve work

Clients cannot modify the project or its development configuration.

## Admin

The Admin has platform-wide access to manage:

* Users
* Organizations
* Billing
* Permissions
* Audit logs
* System settings

---

# 🔐 Authentication & Security

## Authentication

The platform is planned to support:

* Google OAuth
* Email registration
* Google login
* Email login
* Email verification
* Password recovery
* OTP or password-reset email
* Secure sessions
* Secure cookies
* Refresh tokens
* Multiple-device login
* Logout from all devices

Two-factor authentication is planned as a bonus security capability for:

* Workspace Owners
* Administrators

## Security Requirements

The platform will prioritize:

* Password hashing
* Role-Based Access Control (RBAC)
* Organization-level permission management
* Input validation
* XSS protection
* CSRF protection where applicable
* Rate limiting
* Secure file-upload validation
* Audit logging
* API authorization middleware
* Secure environment-variable management

---

# 🎨 UI/UX Requirements

The platform is intended to provide:

* Responsive design
* Mobile-first layouts
* Dark and light themes
* Drag-and-drop boards
* Skeleton loading
* Empty states
* Toast notifications
* Keyboard shortcuts
* Command palette (`Ctrl/Cmd + K`)
* Smooth animations
* Accessibility based on WCAG fundamentals
* SEO-friendly landing pages

---

# 🌐 Landing Page

The public landing page will include:

* Hero section
* Product features
* Pricing
* Testimonials
* FAQ
* Contact
* Blog
* Footer
* Responsive navigation
* Dark mode
* SEO

---

# 🔄 Product Development Methodology

The project follows an **iterative Prototyping Model**.

### Development Cycle

```text
Requirement Identification
          ↓
        MVP
          ↓
Selected-User Testing
          ↓
    Feedback
          ↓
Incremental Changes
          ↓
   Re-evaluation
          ↓
     Client Review
          ↓
   Client Approval
          ↓
Further Iteration
```

The purpose of this approach is to validate the product with real users early and continuously refine the system based on feedback rather than attempting to build the entire final product without validation.

---

# 👨‍💼 Client Collaboration

Client involvement is an important part of the platform.

Clients can participate in the product-development process without receiving permission to modify the actual project configuration.

The intended workflow is:

```text
Team Builds Product
       ↓
Client Observes Progress
       ↓
Client Reviews Documents
       ↓
Client Communicates With Team
       ↓
Client Provides Feedback
       ↓
Team Makes Changes
       ↓
Client Reviews Again
       ↓
Client Approval
```

This supports the iterative prototyping approach used by the project.

---

# 🧩 Technology Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS

## Backend

* Node.js

## Database

* MongoDB

## Authentication

* Google OAuth
* Email Authentication
* Secure Sessions

## Storage

* Cloudinary

## Deployment

* Vercel

### Current Architecture Status

The detailed system architecture and API communication pattern are **currently under design**.

The following decisions are intentionally left open until implementation:

* API architecture
* REST vs GraphQL vs other API approach
* Backend service structure
* Real-time communication architecture
* AI service architecture
* Database schema
* Detailed authorization architecture

---

# 🗃️ Planned Database Entities

The planned data model will include entities corresponding to the platform's major workflows:

* Users
* Organizations
* Workspaces
* Roles
* Permissions
* Projects
* Sprints
* Tasks
* Subtasks
* Labels
* Comments
* Attachments
* Wiki Pages
* Meetings
* Time Logs
* Notifications
* Messages
* Activity Logs
* Integrations
* Settings

The final MongoDB schema will be designed during the architecture phase.

---

# 🔌 Planned Integrations

The platform is intended to support integrations such as:

* GitHub
* Google Calendar
* Google Drive
* Slack
* Discord
* Zoom
* Microsoft Teams

---

# 🚀 Planned Bonus Features

Additional features may be introduced incrementally, including:

* Gantt chart
* Mind map view
* Collaborative whiteboard
* Offline mode / PWA
* Multi-language support
* Public project pages
* Guest access
* Team performance leaderboard
* Calendar synchronization
* Email digests
* Dockerized deployment
* CI/CD pipeline
* Swagger/OpenAPI documentation

---

# 📌 Development Status

The project is being developed incrementally.

### Product Definition

* [x] Problem identified
* [x] Target users identified
* [x] Core product concept defined
* [x] Major feature scope defined
* [x] User roles defined
* [x] Authentication requirements defined
* [x] AI feature scope defined
* [x] Product-development methodology defined

### Architecture

* [ ] System architecture
* [ ] API architecture
* [ ] MongoDB schema
* [ ] Real-time communication architecture
* [ ] AI architecture

### Implementation

Implementation status will be updated as each module is completed.

> **Note:** Features listed in the product scope represent the intended platform capabilities. A feature should only be marked as implemented after it has actually been developed and tested.

---

# 📖 Project Vision

The long-term vision is to create a unified environment where a team can take a product from an initial requirement to a client-approved implementation without constantly moving between disconnected applications.

The platform aims to connect:

**People + Projects + Tasks + Communication + Documentation + Files + Meetings + Development Context + Clients + Analytics + AI**

into one coherent product-development workspace.

The goal is not simply to replace one project-management tool. The goal is to reduce the fragmentation surrounding the **entire process of building a product with a team**.
