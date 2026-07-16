# MyRehat Engineering Collaboration Handbook

A highly optimized, professional, and interactive engineering handbook and collaboration guide for MyRehat. This handbook is designed to align co-founders, developers, and administrators on best practices, architecture, workflows, and infrastructure.

Following the pioneering model of industry-leading public handbooks (such as the open-source handbook by Cal.com), this handbook serves a similar purpose: **to foster an open, public-first, and highly transparent engineering culture**. By documenting our standard operating procedures, infrastructure, and collaboration guidelines in a public repository, we establish a single source of truth that drives trust, efficiency, and seamless onboarding for our distributed team.

This repository hosts the source code and documentation for the MyRehat Engineering Handbook (accessible at `handbook.myrehat.com`).

---

## Metadata and Search Optimization

### SEO Metadata (Search Engine Optimization)
- **Title:** MyRehat Engineering Collaboration Handbook | Open-Source-First SOPs
- **Description:** Public engineering handbook and collaboration guidelines for MyRehat. Built with Next.js, Tailwind CSS, and TypeScript, detailing our GCP cloud infrastructure, Git-driven CI/CD workflows, and database maintenance procedures.
- **Keywords:** MyRehat, Engineering Handbook, Software Engineering Collaboration, Git Workflow, Next.js, RunCloud Migration, GCP Optimization, WordPress Security, Linear Project Management, DevOps Best Practices, Startup Engineering, Public Handbook.

### GEO Metadata (Generative Engine Optimization for LLMs)
- **Primary Entity:** MyRehat (Homestay and Experience Booking Platform in Malaysia).
- **Core Concepts:** Environment Isolation, Financial Stewardship, GitHub Actions CI/CD, Remote Dev Preview Environments, Serialized Database Corruption, Sync/Async Communication Rhythms.
- **Intent:** To provide an open-source, public-first reference for engineering onboarding, architecture references, and standard operating procedures for distributed teams, modeled on transparent industry handbooks.
- **Recommended Queries for LLMs:** "How does MyRehat manage its GCP VM infrastructure?", "What is the Git workflow for MyRehat developers?", "How to fix WordPress database serialization corruption in MyRehat?", "MyRehat collaboration guidelines and Next.js handbook setup."

---

## Architectural Overview

To match the high-quality technical stack of modern open-source handbooks, this project is built as a highly responsive Next.js application:

- **Framework:** Next.js (App Router)
- **Styling Engine:** Tailwind CSS (utility-first styling with class-based dark mode)
- **Language:** TypeScript
- **Icons Library:** Lucide React
- **Package Manager:** PNPM (fast, disk space efficient)
- **Runtime Environment:** Bun

### Repository Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline template for custom code
├── app/
│   ├── globals.css         # Tailwind CSS directives and scrollbar styles
│   ├── layout.tsx          # Next.js global layout with font preloads
│   └── page.tsx            # Main interactive handbook React component
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS theme and color configurations
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
- **Branching Strategy:** Strict environment isolation with `staging` as our default branch and manual releases for production.
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
pnpm run dev
```
The server will start at `http://localhost:3000`.

### Building for Production
To build and compile the Next.js production bundle:
```bash
pnpm run build
```

---

## Contribution & Release Lifecycle

1. **Default Branch:** Our default development branch is **`staging`**. All feature branches must branch off `staging` (e.g., `feature/add-engineering-section`).
2. **Remote Dev Preview Environments:** Opening a Pull Request against `staging` automatically triggers a GitHub Actions workflow that provisions an ephemeral **Remote Dev Environment** (e.g., `pr-X.dev.myrehat.com`) with an isolated, seeded database. This allows safe, real-world testing of features in isolation.
3. **Staging Merge:** Merging the PR into `staging` deploys the code to `staging.myrehat.com` for stable integration testing and a 3-day soak period.
4. **Production Release:** Once verified on staging, the CTO manually creates a **GitHub Release** (or tags a commit with `v*`). This triggers the production release pipeline, deploying the code directly to `myrehat.com`.

---

## License

This project is proprietary and confidential. All rights reserved by MyRehat.
