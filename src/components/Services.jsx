import { motion } from 'framer-motion'
import { Code2, ShoppingBag, Cuboid } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'High-performance websites built with modern frameworks, optimized for speed, SEO, and conversions.'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    desc: 'Conversion-focused storefronts using Shopify or headless architectures with secure payments and robust integrations.'
  },
  {
    icon: Cuboid,
    title: 'Custom Web Apps',
    desc: 'Tailor-made web applications designed around your workflows, data models, and growth targets.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(217,70,239,0.12),transparent),radial-gradient(600px_300px_at_90%_60%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Services engineered for impact</h2>
          <p className="mt-4 text-slate-300">Everything you need to stand out online — delivered with precision and polish.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6">
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-6 w-6 text-fuchsia-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300/90">{desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-fuchsia-500/30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
