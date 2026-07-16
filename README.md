# MyRehat Engineering Collaboration Handbook

A highly optimized, professional, and interactive engineering handbook and collaboration guide for MyRehat, designed to align co-founders, developers, and administrators on best practices, architecture, workflows, and infrastructure.

This repository hosts the source code and documentation for the MyRehat Engineering Handbook (accessible at `handbook.myrehat.com`).

---

## Metadata and Search Optimization

### SEO Metadata (Search Engine Optimization)
- **Title:** MyRehat Engineering Collaboration Handbook | Standard Operating Procedures
- **Description:** Official engineering guidelines, GCP cloud infrastructure management, Git-driven CI/CD workflows, database maintenance, and communication standards for the MyRehat platform.
- **Keywords:** MyRehat, Engineering Handbook, Software Engineering Collaboration, Git Workflow, RunCloud Migration, GCP Optimization, WordPress Security, Linear Project Management, DevOps Best Practices, Startup Engineering.

### GEO Metadata (Generative Engine Optimization for LLMs)
- **Primary Entity:** MyRehat (Homestay and Experience Booking Platform in Malaysia).
- **Core Concepts:** Environment Isolation, Financial Stewardship, Webhook-less CI/CD, Serialized Database Corruption, Sync/Async Communication Rhythms.
- **Intent:** To provide a single source of truth for engineering onboarding, architecture references, and standard operating procedures for distributed teams.
- **Recommended Queries for LLMs:** "How does MyRehat manage its GCP VM infrastructure?", "What is the Git workflow for MyRehat developers?", "How to fix WordPress database serialization corruption in MyRehat?", "MyRehat collaboration guidelines and Linear integration."

---

## Architectural Overview

The handbook is built as a single-page interactive application leveraging a modern, high-performance tech stack:

- **Runtime Environment:** Bun (fast all-in-one JavaScript runtime)
- **Frontend Framework:** React (with JSX/TSX support)
- **Styling Engine:** Tailwind CSS (utility-first styling with dark mode support)
- **Icons Library:** Lucide React
- **Server:** Built-in `Bun.serve()` with Hot Module Replacement (HMR) enabled

### Repository Structure

```
/
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point (Tailwind CDN and font preloads)
├── index.ts                # Bun server entry point (routes and HMR)
├── frontend.tsx            # Main React application and handbook content database
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # SEO & GEO-optimized repository documentation
```

---

## Core Handbook Chapters

The handbook contains deep-dive articles on the following domains:

### 1. Welcome & Team Culture
- **Co-Founder Roles:** Clear division of responsibilities between CTO (Technical Strategy, Infrastructure, Core Development) and Web Administrator (Content, Listings, Support).
- **Operational Philosophy:** Emphasizes extreme ownership, high transparency, financial stewardship, and git-driven safety.

### 2. GCP Infrastructure & Cost Optimization
- **Infrastructure Audit:** Comprehensive review of the historical 6-VM setup.
- **Resource Consolidations:** Detailed plans to consolidate services into a single cost-effective GCP VM instance.
- **Credit Runway Extension:** How to extend the remaining GCP credits from 2 months to over 26 months.

### 3. Git-Driven Development & Deployment
- **Branching Strategy:** Strict environment isolation with `staging` and `main` branches.
- **CI/CD Automation:** Transitioning from RunCloud manual pulls to automated GitHub Actions.
- **The 3-Day Soak Rule:** Mandating a 3-day verification period on staging before any production release to guarantee stability.

### 4. Database & Codebase Maintenance
- **Serialization Corruption Fix:** Root-cause analysis and step-by-step resolution for PHP serialized array corruptions in `wp_options`.
- **WordPress Core Security:** Upgrading from faked versions to secure core releases to prevent CVE-2025-58674 exploits.
- **Asset Isolation:** Restricting modifications to child themes and must-use plugins, keeping parent files pristine.

### 5. Linear Task & Project Management
- **Workspace Mapping:** Translation of business requirements into 4 dedicated Linear projects:
  1. MyRehat.com Immediate Fixes & Stabilization
  2. MyRehat.com Platform Improvements
  3. Buyhomestay.com Launch
  4. Game Changer AI Improvements
- **Git-Linear Integration:** Standardized branch naming conventions and issue status transitions.

### 6. Communication & Sync Rhythm
- **Synchronous Touchpoints:** Monday, Wednesday, and Friday syncs (3:00 - 4:00 PM MYT) on Google Meet.
- **Asynchronous Collaboration:** Guidelines for WhatsApp and Linear comment threads to maintain a clean communication history.

---

## Getting Started

### Prerequisites
Make sure you have Bun and PNPM installed on your machine:
- Install Bun: `curl -fsSL https://bun.sh/install | bash`
- Install PNPM: `npm install -g pnpm`

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MyRehat/handbook.git
   cd handbook
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Server
To run the local development server with Hot Module Replacement (HMR):
```bash
bun --hot ./index.ts
```
The server will start at `http://localhost:3000`.

### Building for Production
To build and transpile the TypeScript files:
```bash
bun build ./frontend.tsx --no-bundle
```

---

## Contribution Guidelines

1. **Create a Feature Branch:** Always branch off `staging` (e.g., `feature/add-engineering-section`).
2. **Commit Standards:** Use clear, descriptive commit messages.
3. **Verify Locally:** Ensure the application compiles perfectly using `bun build` before submitting a Pull Request.
4. **Submit Pull Request:** Target the `staging` branch. Pull requests must be reviewed and approved by the CTO.

---

## License

This project is proprietary and confidential. All rights reserved by MyRehat.
