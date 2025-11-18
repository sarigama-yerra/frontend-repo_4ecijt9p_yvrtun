import { motion } from 'framer-motion'
import { Compass, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Discovery & Strategy',
    desc: 'We align on goals, audience, and KPIs, then blueprint the user journeys and content structure.'
  },
  {
    icon: Cpu,
    title: 'Design & Build',
    desc: 'We craft the visual system and interactions, then build with clean, scalable code and CMS setup.'
  },
  {
    icon: Rocket,
    title: 'Launch & Optimize',
    desc: 'We ship, monitor analytics, and iterate for performance, SEO, and conversion improvements.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">A streamlined, transparent process</h2>
          <p className="mt-4 text-slate-300">Built for speed, clarity, and measurable outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-6 w-6 text-indigo-300" />
                </div>
                <span className="text-sm text-slate-300/80">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
