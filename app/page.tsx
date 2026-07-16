"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Users, 
  Server, 
  GitBranch, 
  Database, 
  Layers, 
  MessageSquare, 
  ChevronRight, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Copy, 
  Check, 
  ExternalLink,
  TrendingDown,
  Clock,
  ShieldAlert
} from "lucide-react";

// Types
interface Article {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// Custom CodeBlock Component with Copy Functionality
const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = "bash" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-200 text-sm font-mono p-4 border border-slate-800">
      <div className="absolute right-3 top-3 flex items-center gap-2">
        <span className="text-xs text-slate-500 uppercase">{language}</span>
        <button 
          onClick={handleCopy} 
          className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-accent-emerald" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="overflow-x-auto custom-scrollbar pr-12 whitespace-pre-wrap">{code}</pre>
    </div>
  );
};

// Custom Callout Component
const Callout: React.FC<{ type: "info" | "warning" | "danger" | "success"; title?: string; children: React.ReactNode }> = ({ type, title, children }) => {
  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50",
      text: "text-blue-800 dark:text-blue-200",
      icon: <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50",
      text: "text-amber-800 dark:text-amber-200",
      icon: <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
    },
    danger: {
      bg: "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50",
      text: "text-rose-800 dark:text-rose-200",
      icon: <ShieldAlert size={18} className="text-rose-500 shrink-0 mt-0.5" />
    },
    success: {
      bg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50",
      text: "text-emerald-800 dark:text-emerald-200",
      icon: <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
    }
  };

  const current = styles[type];

  return (
    <div className={`flex gap-3 p-4 my-5 rounded-lg border ${current.bg} ${current.text}`}>
      {current.icon}
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1">{title}</h5>}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default function Handbook() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });
  
  const [activeArticleId, setActiveArticleId] = useState("welcome");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handbook Articles Content
  const articles: Article[] = [
    {
      id: "welcome",
      title: "Welcome & Team Structure",
      category: "Getting Started",
      icon: <Users size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Welcome to MyRehat Engineering
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Welcome to the official **MyRehat Engineering Collaboration Handbook**. This is our central, living source of truth for how we collaborate, develop software, manage our cloud infrastructure, and maintain the systems powering MyRehat.
          </p>

          <Callout type="info" title="Who We Are">
            **MyRehat** (Mesra Rehat Sdn Bhd, Malaysia) is a Muslim-friendly homestay and travel marketplace, dedicated to providing trusted accommodation and travel experiences. Our platform connects guests with curated Muslim-friendly properties and local travel experiences.
          </Callout>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">The Core Team</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our engineering and operational structure is designed for highly efficient, asynchronous collaboration across borders:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Zainal Zikri Zainal Abidin</div>
              <div className="text-xs text-brand-500 dark:text-brand-400 font-semibold mb-2">Founder &amp; Managing Director</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ex-PETRONAS, ex-OYO Homes Malaysia founding team. Leads business strategy, investor relations, property portfolios, and marketing. Warm, relationship-driven, and based in Malaysia.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Imamuzzaki Abu Salam (Zaki)</div>
              <div className="text-xs text-brand-500 dark:text-brand-400 font-semibold mb-2">Co-Founder &amp; CTO</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Senior engineer mentored by Gojek alumni. Leads technology strategy, system architecture, database security, and AI integrations. Careful, detail-oriented, and based remotely in Indonesia.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Farrah Najwa</div>
              <div className="text-xs text-brand-500 dark:text-brand-400 font-semibold mb-2">Website Admin &amp; IT Specialist</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Part-time software engineering student. Responsible for weekly bug testing, light coding, maintaining the WordPress core, and executing immediate site fixes under the CTO's guidance.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Sheera Hussin &amp; Rinnie Zakaria</div>
              <div className="text-xs text-brand-500 dark:text-brand-400 font-semibold mb-2">Comms &amp; Business Development</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Sheera (ex-Bank Negara) leads Content &amp; Comms. Rinnie (ex-Agoda, SiteMinder) leads Business Development and manages third-party host relations. They feed product requirements to the tech team.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Engineering Principles</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Discipline in Claims:</strong> Never claim a bug is "verified" unless it has been reproduced as a real user.</li>
            <li><strong>Data-Driven &amp; Rigorous:</strong> Always cite sources for figures, metrics, and estimates. Differentiate between verified facts and inferences.</li>
            <li><strong>Collaborative &amp; Empathetic:</strong> Never embarrass team members about existing legacy code or issues. Reframe everything as an optimization opportunity.</li>
            <li><strong>Asynchronous-First:</strong> Document everything. Use Linear as our single source of truth for work tracking so everyone has full visibility.</li>
          </ul>
        </div>
      )
    },
    {
      id: "gcp-infrastructure",
      title: "GCP Infrastructure & Cost Optimization",
      category: "Infrastructure",
      icon: <Server size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            GCP Infrastructure &amp; Cost Optimization
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            In July 2026, we conducted a comprehensive technical and financial audit of MyRehat's Google Cloud Platform (GCP) environment. The audit revealed a major financial leak that we have since resolved through systematic consolidation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Previous Burn Rate</div>
                <div className="text-2xl font-bold text-rose-700 dark:text-rose-300 mt-1">~$1,500 / mo</div>
              </div>
              <div className="text-xs text-rose-600 dark:text-rose-400 mt-2 flex items-center gap-1">
                <TrendingDown size={14} /> Credits expiring Sept 2026
              </div>
            </div>
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Optimized Burn Rate</div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mt-1">~$100 - $150 / mo</div>
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle size={14} /> Saving over RM 6,000/month
              </div>
            </div>
            <div className="p-4 rounded-lg bg-brand-50 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/30 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">Credit Runway Extended</div>
                <div className="text-2xl font-bold text-brand-700 dark:text-brand-300 mt-1">2.5 mo → 26+ mo</div>
              </div>
              <div className="text-xs text-brand-600 dark:text-brand-400 mt-2 flex items-center gap-1">
                <Clock size={14} /> Safe runway through late 2028
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. The VM Audit Findings</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our GCP project (`myrehat-website`) was running **six active VM instances**, of which **five were completely redundant or idle**:
          </p>

          <div className="overflow-x-auto custom-scrollbar my-6">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold">
                  <th className="py-3 px-4">VM Name</th>
                  <th className="py-3 px-4">Spec</th>
                  <th className="py-3 px-4">Est. Cost</th>
                  <th className="py-3 px-4">Status / Audit Findings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`myrehat-runcloud`</td>
                  <td className="py-3 px-4">8 vCPU / 30 GB</td>
                  <td className="py-3 px-4">~$250 - $300</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400">**ACTIVE:** Hosts both live Production and Staging. Over-provisioned.</td>
                </tr>
                <tr className="bg-rose-50/30 dark:bg-rose-950/10">
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`myrehat-2-vm`</td>
                  <td className="py-3 px-4">32 vCPU / 120 GB</td>
                  <td className="py-3 px-4">~$1,000 - $1,200</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">**LEAK:** Idle machine serving a static "Coming Soon" page.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`myrehat-automate`</td>
                  <td className="py-3 px-4">4 vCPU / 16 GB</td>
                  <td className="py-3 px-4">~$100 - $120</td>
                  <td className="py-3 px-4 text-amber-600">**IDLE:** Blank 404 proxy response. Unused.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`myrehat-my-vm`</td>
                  <td className="py-3 px-4">2 vCPU / 7.5 GB</td>
                  <td className="py-3 px-4">~$50 - $60</td>
                  <td className="py-3 px-4 text-amber-600">**REDUNDANT:** Legacy WP copy of landing page.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`langflow`</td>
                  <td className="py-3 px-4">2 vCPU / 4 GB</td>
                  <td className="py-3 px-4">~$25</td>
                  <td className="py-3 px-4">**SANDBOX:** Kept stopped unless prototyping.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">`wordpress-myrehat-staging-vm`</td>
                  <td className="py-3 px-4">2 vCPU / 4 GB</td>
                  <td className="py-3 px-4">~$25</td>
                  <td className="py-3 px-4 text-rose-600">**REDUNDANT:** Old staging site in Europe (Belgium).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Step-by-Step Consolidation Plan</h2>
          
          <div className="space-y-4 my-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Stop and Delete Legacy/Idle VMs</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Take a snapshot backup of the disks for `myrehat-2-vm` and `wordpress-myrehat-staging-vm` for safety, then **STOP and DELETE** them. This immediately cuts over 80% of our GCP bill.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Static Hosting for Legacy Pages</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Export the old landing page from `myrehat-my-vm` as static HTML/CSS. Host it for free on Vercel or Google Cloud Storage, and delete the VM.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Downscale the Active RunCloud VM</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  The `myrehat-runcloud` VM (`n1-standard-8`) is severely over-provisioned. Schedule a 10-minute maintenance window and change the machine type to **`e2-standard-4`** (4 vCPUs, 16 GB RAM) or **`e2-standard-2`** (2 vCPUs, 8 GB RAM). This is more than powerful enough to host staging, production, Redis caching, and our upcoming WhatsApp AI Docker containers.
                </p>
              </div>
            </div>
          </div>

          <Callout type="success" title="Leveraging RunCloud's Multi-App Capabilities">
            RunCloud is an excellent server management tool. It allows us to host **dozens of separate web applications** (staging sites, production sites, databases) on a **single server**. We do NOT need separate GCP VMs for staging and production.
          </Callout>
        </div>
      )
    },
    {
      id: "git-workflow",
      title: "Git-Driven Development & Deployment",
      category: "Workflow",
      icon: <GitBranch size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Git-Driven Development &amp; Deployment
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            To prevent breaking the live production site (`myrehat.com`), we have established a strict, Git-driven development and deployment pipeline. Direct file editing on staging or production servers is strictly forbidden.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Environment Architecture</h2>
          <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 text-center my-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold w-48">
                Local Dev (Docker)
              </div>
              <ChevronRight className="rotate-90 md:rotate-0 text-slate-400" />
              <div className="p-3 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold w-48">
                GitHub: Pull Request
                <div className="text-xs text-brand-500 font-normal mt-1">Remote Dev Env</div>
              </div>
              <ChevronRight className="rotate-90 md:rotate-0 text-slate-400" />
              <div className="p-3 rounded bg-brand-500 text-white shadow-sm font-semibold w-48">
                Remote Dev Env
                <div className="text-xs text-brand-100 font-normal mt-1">pr-X.dev.myrehat.com</div>
              </div>
            </div>
            
            <div className="flex justify-center my-4">
              <ChevronRight className="rotate-90 text-slate-400" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="p-3 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold w-48">
                Merge PR (Staging)
                <div className="text-xs text-slate-500 font-normal mt-1">staging branch</div>
              </div>
              <ChevronRight className="rotate-90 md:rotate-0 text-slate-400" />
              <div className="p-3 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold w-48">
                Staging Env
                <div className="text-xs text-brand-500 font-normal mt-1">staging.myrehat.com</div>
              </div>
              <ChevronRight className="rotate-90 md:rotate-0 text-slate-400" />
              <div className="p-3 rounded bg-emerald-600 text-white shadow-sm font-semibold w-48">
                Production Release
                <div className="text-xs text-emerald-100 font-normal mt-1">myrehat.com</div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Core Workflow Rules</h2>
          
          <div className="space-y-4 my-6">
            <div className="p-4 rounded-lg border-l-4 border-rose-500 bg-white dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white">Rule 1: No Direct Editing</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Files must **never** be edited directly on any environment via server dashboards or FTP. All code changes must be tracked in Git.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-blue-500 bg-white dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white">Rule 2: Remote Dev Preview Environments</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Our default branch is **`staging`**. When a Pull Request is opened against `staging`, a GitHub Actions workflow automatically provisions an ephemeral **Remote Dev Environment** (e.g., `pr-X.dev.myrehat.com`) with isolated, seeded test databases. This allows safe previewing and review before code merges.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-brand-500 bg-white dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white">Rule 3: Staging Verification</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Merging a PR into `staging` deploys it automatically to `staging.myrehat.com`. This is our stable verification environment where all integrated features spend a soak period before release.
              </p>
            </div>

            <div className="p-4 rounded-lg border-l-4 border-emerald-500 bg-white dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white">Rule 4: Manual Production Releases</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Production deployments to `myrehat.com` are strictly gated. Deployments are triggered **manually** by the CTO creating a GitHub Release or pushing a version release tag, ensuring full audit control.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Private Repository Setup</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our private GitHub repository is named **`myrehat-custom-code`**. To keep our repository lightweight and maintainable, we track **only** our custom codebase, not the WordPress core files:
          </p>

          <CodeBlock code={`# Repository structure
wp-content/
├── themes/
│   └── homey-myrehat/     # Our custom active child theme
└── mu-plugins/
    └── myrehat_redirects.php # Must-use plugins for custom routing/redirects`} language="text" />
        </div>
      )
    },
    {
      id: "database-maintenance",
      title: "Database & Codebase Maintenance Guidelines",
      category: "Maintenance",
      icon: <Database size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Database &amp; Codebase Maintenance Guidelines
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Maintaining a secure, clean, and optimized codebase is critical for the long-term stability and performance of the MyRehat platform. Below are our core codebase isolation and database maintenance guidelines.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. The Serialized DB Corruption (The "Time-Bomb" Issue)</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            During our technical audit, we discovered a major database corruption in the `wp_options` table for the option `homey_options` (~88 KB serialized array):
          </p>

          <Callout type="danger" title="The Serialization Risk">
            The database contained **9 entries with byte-length mismatches** due to Latin-1 characters (like the degree sign `\xB0`) stored as raw single bytes instead of UTF-8 double bytes. PHP's `unserialize()` returned `false`, causing fatal crashes. Production only survives because of a stale **Redis object cache**. If the Redis cache is cleared or expires, production will immediately crash with HTTP 500.
          </Callout>

          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We successfully repaired this on Staging using a custom state-machine parser script (`/tmp/apply_staging_fix.php`) that fixes string lengths byte-by-byte. **This script must be run on Production immediately after a full RunCloud snapshot.**
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Codebase Isolation &amp; Child Themes</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Previously, modifications were made directly to the parent `homey` theme files. This meant theme updates would overwrite and destroy all custom code (coupons, checkout integrations).
          </p>

          <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 my-4">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Our Isolation Architecture:</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li><strong>Active Child Theme (`homey-myrehat`):</strong> All custom templates, hooks, and assets must live here.</li>
              <li><strong>Must-Use Plugins (`wp-content/mu-plugins/`):</strong> Critical system integrations (like legacy URL 301 redirects) live here so they cannot be deactivated via the WordPress admin dashboard.</li>
              <li><strong>No Direct Hacks:</strong> Rebuild custom features (like WooCommerce coupons) using WordPress core or plugin APIs, never by modifying parent theme files.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Regular Database Maintenance</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our database has grown bloated over time (1.2 GB). Pruning and cleaning the database speeds up SQL queries and reduces backup sizes:
          </p>

          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Post Revisions:</strong> Clean up over 7,500 post revisions to shrink the database size significantly.</li>
            <li><strong>Activity Logs:</strong> Prune activity log rows (918K+ rows in `wp_options`) to prevent slow page load and database lockups.</li>
            <li><strong>WordPress Security:</strong> Revert the faked WordPress version in `wp-includes/version.php` from `7.0` to its actual version (`6.8`) and apply the 5 missing security patches (including CVE-2025-58674) immediately.</li>
          </ul>
        </div>
      )
    },
    {
      id: "linear-management",
      title: "Linear Task & Project Management",
      category: "Workflow",
      icon: <Layers size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Linear Task &amp; Project Management
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            We use **Linear** as our single source of truth for engineering. All bug reports, platform improvements, launch checklists, and strategic features must be logged, estimated, and tracked in Linear.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Our Linear Project Map</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We have translated all team emails and technical audits into four distinct, active projects in Linear:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-accent-rose"></span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Project 1: MyRehat.com Immediate Fixes &amp; Stabilization</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Focuses on critical bugs: Experience image uploads, "Free" listing price displays, profile saving, coupon checkout integration, and the production database corruption repair.
              </p>
              <div className="text-xs font-mono text-slate-500">ID: 8ffd8ba0-4cfb-46ec-83f0-97c7dfef83ab</div>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-accent-amber"></span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Project 2: MyRehat.com Platform Improvements</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Focuses on medium-term enhancements: Curlec gateway migration, GA tagging, rental categories (Daily/Weekly/Monthly), and Host Button dashboard agreements.
              </p>
              <div className="text-xs font-mono text-slate-500">ID: 705a385d-7912-4792-b9f9-e4df0e512e8b</div>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Project 3: Buyhomestay.com Launch</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Focuses on launching buyhomestay.com: Host login creation, pricing page setup, About Us page, property analysis calculator, and GA tagging.
              </p>
              <div className="text-xs font-mono text-slate-500">ID: 1b72228b-846c-44f0-8af7-90a4c503c9a2</div>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Project 4: Game Changer AI Improvements</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Focuses on deep-tech differentiation for grants (Cradle): WhatsApp AI for host inquiries, pricing AI tool, intelligent host dashboard, and automated listing creation.
              </p>
              <div className="text-xs font-mono text-slate-500">ID: 4e3162c3-d5fa-4712-97ef-36e793b5a8dd</div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Issue Tracking Guidelines</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Git Branch Linking:</strong> Always use the branch name generated by Linear (e.g., `imbios/myr-54-fix-experience-image-upload-bug`) when starting work on a task.</li>
            <li><strong>PR Descriptions:</strong> Use our GitHub PR generator skill to automatically compile detailed pull request descriptions linking to the specific Linear issue ID.</li>
            <li><strong>Status Transitions:</strong> Move tasks from **Todo** to **In Progress** before starting coding. Move to **Done** only after the staging soak period is complete and the change is pushed to production.</li>
          </ul>
        </div>
      )
    },
    {
      id: "sync-rhythm",
      title: "Communication & Sync Rhythm",
      category: "Workflow",
      icon: <MessageSquare size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Communication &amp; Sync Rhythm
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            With a distributed team spanning Malaysia and Indonesia, maintaining a structured, disciplined communication rhythm prevents silos and keeps everyone aligned on priority tasks.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Synchronous Syncs</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We hold regular, brief video syncs to discuss blockers, progress, and upcoming priorities:
          </p>

          <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 my-4 flex items-center gap-4">
            <Clock size={36} className="text-brand-500 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Monday, Wednesday, Friday Syncs</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Held from **3:00 PM to 4:00 PM MYT** (Malaysia Time) on Google Meet.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                *Agenda:* 5-minute individual standup (what was done, what is being done, any blockers), followed by collaborative debugging or strategic planning.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Asynchronous Channels</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            For day-to-day operations and non-urgent topics, we leverage async communication:
          </p>

          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>WhatsApp (Company Group):</strong> Used for immediate operational updates, server downtime alerts, and urgent communications.</li>
            <li><strong>Linear Comments:</strong> Used for all technical and implementation discussions. If a decision is made on a task, write a brief comment in the corresponding Linear issue so it is documented.</li>
            <li><strong>GitHub Pull Requests:</strong> Used for code reviews and architectural feedback. Imamuzzaki reviews all code before merging into the `main` branch.</li>
          </ul>

          <Callout type="info" title="Asynchronous Etiquette">
            Give team members at least 4 hours to respond to non-urgent queries. Since Farah is a part-time student and Zaki is remote, respect their schedules and avoid tagging them repeatedly unless it is a production-critical emergency.
          </Callout>
        </div>
      )
    },
    {
      id: "github-actions",
      title: "CI/CD with GitHub Actions",
      category: "Workflow",
      icon: <Layers size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            CI/CD with GitHub Actions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Instead of relying on legacy webhook pulls, we have migrated to a robust, enterprise-grade CI/CD pipeline using **GitHub Actions**. This ensures that every code change is thoroughly tested, linted, and verified before hitting staging or production.
          </p>

          <Callout type="success" title="Why GitHub Actions?">
            Automated actions act as a gatekeeper, validating our code first and only deploying if all checks pass. This prevents broken code from ever reaching our active staging or production environments.
          </Callout>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Remote Dev Preview Environments</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our branching strategy establishes **`staging`** as the default branch. Opening a Pull Request against `staging` triggers the Remote Dev workflow:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Step 1: Ephemeral Virtual Host Creation</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Creates a new isolated directory on the Collab-Friendly VM and registers a subdomain (e.g., `pr-12.dev.myrehat.com`) via Cloudflare CLI (`cf`).
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Step 2: Seeded Database Provisioning</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Spins up a new MySQL database, clones the staging database schema, and seeds it with sanitized/scrambled mock listing and host data.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Step 3: Isolated Testing &amp; Verification</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Deploys the PR's custom child theme and plugin code to the new directory. Reviewers can test changes directly on the preview URL with zero risk to other environments.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
              <div className="font-bold text-slate-900 dark:text-white text-base">Step 4: Auto-Cleanup</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                When the Pull Request is merged or closed, the database is dropped, the directory is deleted, and the Cloudflare DNS record is removed automatically.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Staging Deployment</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Merging the PR into the `staging` branch automatically triggers the staging deployment:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li>Runs static analysis, ESLint, and TypeScript type checking.</li>
            <li>Executes the unit and integration test suite via `bun test`.</li>
            <li>Deploys the verified code securely via SSH/rsync to `staging.myrehat.com`.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Production Release</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            When staging is verified and approved, the CTO manually creates a **GitHub Release** (or tags a commit with `v*`). This triggers the production release pipeline:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li>Takes an automated database and file snapshot of the production server.</li>
            <li>Deploys the released tag codebase to `myrehat.com`.</li>
            <li>Flushes Redis object caches and verifies system health.</li>
          </ul>
        </div>
      )
    },
    {
      id: "async-review",
      title: "Async-First & Review Culture",
      category: "Best Practices",
      icon: <MessageSquare size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Async-First &amp; Review Culture
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            In line with industry-leading open-source handbook practices, our engineering team operates under an async-first philosophy. We prioritize deep, focused work over synchronous meetings, and use structured peer reviews to maintain high codebase quality.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Async-First Principles</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Meetings are expensive and interrupt flow. We operate under these guidelines:
          </p>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Document by Default:</strong> If you are planning a feature or bug fix, write a short proposal or outline. Do not explain it in a call; write it in a Linear issue or a markdown file.</li>
            <li><strong>No "Is Anyone Free?" Calls:</strong> Unless it is a production outage, do not ask for ad-hoc calls. Write your question clearly with full context, screenshots, and logs so the other person can answer when they are ready.</li>
            <li><strong>Linear-Driven Execution:</strong> Linear is our source of truth. If it is not in Linear, it does not exist. Status updates happen on Linear, not in daily standups.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Code Review Culture</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We treat code reviews as a collaborative learning process, not a test. We follow industry-leading best practices:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Small, Atomic Pull Requests</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Keep PRs small. A pull request should ideally be **under 300 lines of code** and focus on a single responsibility. Large PRs are difficult to review, hide bugs, and delay deployments.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Constructive, Kind Feedback</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Reviewers focus on the code, not the person. Reframe criticisms as questions or suggestions (e.g., "What do you think of using a helper function here to avoid repetition?" instead of "This code is repetitive").
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">The PR Checklist</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Before requesting review, ensure your branch:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Compiles successfully without warnings.</li>
                  <li>Includes descriptive logs and robust error handling.</li>
                  <li>Does not hardcode any sensitive configuration or secrets.</li>
                  <li>Links directly to the corresponding Linear issue.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "security-secrets",
      title: "Security, Secrets & Compliance",
      category: "Maintenance",
      icon: <Server size={18} />,
      content: (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Security, Secrets &amp; Compliance
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Security is not an afterthought; it is baked into our development lifecycle. In line with strict enterprise compliance policies, we follow industry best practices to secure our servers, database, and customer data.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Secrets Management</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Credentials, database passwords, and API keys are sensitive assets. We enforce strict secrets isolation:
          </p>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Never Commit Secrets:</strong> Database credentials, payment gateway keys, and API tokens must **never** be committed to Git. Our `.gitignore` must strictly block `.env` and configuration files.</li>
            <li><strong>Environment Loading:</strong> We load secrets dynamically from environment variables. In Bun, these are automatically loaded from `.env` files into `process.env`.</li>
            <li><strong>Production Isolation:</strong> Production secrets are injected at runtime via the server environment or a secure secrets manager (like Infisical), and are never accessible to local development clones.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Dependency &amp; Core Security</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Vulnerable third-party packages are a common attack vector. We mitigate this through:
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5 mb-6">
            <li><strong>Regular Auditing:</strong> Run `pnpm audit` regularly to check for package vulnerabilities and patch them.</li>
            <li><strong>WordPress Core Hardening:</strong> Revert the faked WordPress version in `wp-includes/version.php` to its actual version and apply security patches immediately. Silencing warnings fakes security; patching solves it.</li>
            <li><strong>Endpoint Hardening:</strong> Restrict public access to standard WordPress API endpoints (like `/wp-json/wp/v2/users`) to prevent username enumeration and brute-force login attacks.</li>
          </ul>
        </div>
      )
    }
  ];

  // Search filter
  const filteredArticles = articles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower)
    );
  });

  const activeArticle = articles.find(a => a.id === activeArticleId) || articles[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden text-slate-500 dark:text-slate-400"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/20">
              MR
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              MyRehat <span className="font-medium text-slate-500 dark:text-slate-400">Handbook</span>
            </span>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 rounded-full px-3 py-1.5 border border-slate-200 dark:border-slate-700 w-80 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-all">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input 
            type="text" 
            placeholder="Search handbook..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm w-full text-slate-800 dark:text-slate-100 placeholder-slate-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="p-0.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full">
              <X size={12} className="text-slate-400" />
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="https://github.com/MyRehat/handbook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex relative">
        
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm md:hidden"
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800/80 p-4 flex flex-col transition-transform duration-200 md:translate-x-0 md:static md:h-[calc(100vh-57px)]
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex items-center justify-between md:hidden mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white">Navigation</span>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X size={18} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="flex md:hidden items-center gap-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700 mb-4">
            <Search size={16} className="text-slate-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Search handbook..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full text-slate-800 dark:text-slate-100 placeholder-slate-400"
            />
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-6">
            
            {/* Grouped by Category */}
            {["Getting Started", "Infrastructure", "Workflow", "Maintenance", "Best Practices"].map(category => {
              const categoryArticles = filteredArticles.filter(a => a.category === category);
              if (categoryArticles.length === 0) return null;

              return (
                <div key={category} className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2">
                    {category}
                  </h4>
                  <ul className="space-y-0.5">
                    {categoryArticles.map(article => {
                      const isActive = article.id === activeArticleId;
                      return (
                        <li key={article.id}>
                          <button
                            onClick={() => {
                              setActiveArticleId(article.id);
                              setSidebarOpen(false);
                            }}
                            className={`
                              w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left
                              ${isActive 
                                ? "bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border-l-2 border-brand-500 pl-2.5" 
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-900/50"
                              }
                            `}
                          >
                            <span className={isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-400 dark:text-slate-500"}>
                              {article.icon}
                            </span>
                            <span className="truncate">{article.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {filteredArticles.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-sm">
                No articles found matching "{searchQuery}"
              </div>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <div className="text-xs text-slate-400 dark:text-slate-500">
              MyRehat Co-Founder Handbook
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
              Version 1.0.0 (July 2026)
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar h-[calc(100vh-57px)] bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mb-4">
              <span>Handbook</span>
              <ChevronRight size={12} />
              <span>{activeArticle.category}</span>
              <ChevronRight size={12} />
              <span className="text-slate-600 dark:text-slate-300 font-medium">{activeArticle.title}</span>
            </div>

            {/* Article Content */}
            <article className="prose prose-slate dark:prose-invert max-w-none">
              {activeArticle.content}
            </article>

            {/* Pagination Controls */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              {(() => {
                const currentIndex = articles.findIndex(a => a.id === activeArticleId);
                const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
                const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

                return (
                  <>
                    {prevArticle ? (
                      <button
                        onClick={() => setActiveArticleId(prevArticle.id)}
                        className="flex flex-col items-start gap-1 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/20 text-left transition-all w-[45%]"
                      >
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Previous</span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate w-full">{prevArticle.title}</span>
                      </button>
                    ) : <div className="w-[45%]" />}

                    {nextArticle ? (
                      <button
                        onClick={() => setActiveArticleId(nextArticle.id)}
                        className="flex flex-col items-end gap-1 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:bg-slate-50 dark:hover:bg-slate-800/20 text-right transition-all w-[45%]"
                      >
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Next</span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate w-full">{nextArticle.title}</span>
                      </button>
                    ) : <div className="w-[45%]" />}
                  </>
                );
              })()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
