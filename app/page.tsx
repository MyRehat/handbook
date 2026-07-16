import Link from 'next/link';
import { BookOpen, Shield, GitBranch, Terminal, Users, Cpu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              MR
            </div>
            <span className="font-semibold tracking-tight text-lg">MyRehat Handbook</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/MyRehat/handbook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 py-20 text-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-400 text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open &amp; Transparent Collaboration Guidelines
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            MyRehat Engineering Handbook
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The official, public engineering handbook and standard operating procedures for MyRehat, modeled on open, transparent startup handbooks. Aligning our distributed team, reducing communication overhead, and establishing a culture of excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/docs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
            >
              <BookOpen size={18} />
              Read the Handbook
            </Link>
            <Link
              href="https://github.com/MyRehat/handbook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-medium transition-all"
            >
              <Terminal size={18} />
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 relative z-10 w-full">
          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 text-left hover:border-slate-700/80 transition-all">
            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
              <GitBranch size={20} />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">GitOps Release Lifecycle</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Branching strategies, environment isolation, and ephemeral Remote Dev preview environments triggered automatically by PRs.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 text-left hover:border-slate-700/80 transition-all">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
              <Cpu size={20} />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">OpenLiteSpeed Performance</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Consolidated high-performance server configurations, built-in page caching, and optimal system resources management.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 text-left hover:border-slate-700/80 transition-all">
            <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
              <Shield size={20} />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Security &amp; DB Hardening</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Database serialization fixes, secrets management, file permissions, and active protection against CVE exploits.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MyRehat. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-slate-300 transition-colors">
              Documentation
            </Link>
            <Link href="https://github.com/MyRehat/handbook" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
