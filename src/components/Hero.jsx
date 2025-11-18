import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-200 backdrop-blur">
            UAE • Digital Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Futuristic websites that convert and captivate
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We build high-end digital experiences for bold brands in the UAE — from conversion-optimized websites and scalable e‑commerce stores to bespoke web apps engineered for growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-indigo-600/20 transition">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Explore services
            </a>
          </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            'Webflow & React',
            'Headless CMS',
            'Shopify & Medusa',
            'Next.js & Vite',
          ].map((tag) => (
            <motion.div key={tag} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/90">
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
