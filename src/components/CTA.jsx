import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(217,70,239,0.12),transparent),radial-gradient(600px_300px_at_90%_60%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Let’s build something remarkable
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-slate-300">
          Tell us about your goals and we’ll craft a solution that blends design, performance, and business impact.
        </motion.p>
        <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input required placeholder="Name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
          <input placeholder="Company" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-2" />
          <textarea rows="4" placeholder="Project details" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-2" />
          <div className="sm:col-span-2 flex justify-center">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-indigo-600/20 transition">
              Request proposal
            </button>
          </div>
        </motion.form>
        <p className="mt-4 text-xs text-slate-400">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
