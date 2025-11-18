import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(124,58,237,0.25)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative grid place-items-center">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 blur opacity-50 group-hover:opacity-80 transition" />
                <div className="relative rounded-xl bg-slate-900 ring-1 ring-white/10 p-2">
                  <Sparkles className="h-5 w-5 text-fuchsia-300" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Nova Web Lab</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-indigo-600/20 transition">Start a project</a>
            </nav>

            <button className="md:hidden grid place-items-center rounded-xl border border-white/10 bg-white/5 p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-200/80 hover:text-white transition">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-indigo-600/20 transition">Start a project</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
