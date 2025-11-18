import { motion } from 'framer-motion'

const projects = [
  { title: 'Luxury Retail E‑commerce', tags: ['Shopify', 'Headless', 'UAE'], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fintech Marketing Site', tags: ['Next.js', 'CMS', 'SEO'], image: 'https://images.unsplash.com/photo-1760804876422-7efb73b58048?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBSZXRhaWwlMjBFJUUyJTgwJTkxY29tbWVyY2V8ZW58MHwwfHx8MTc2MzQ1MDYyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Logistics Web Platform', tags: ['React', 'API', 'Dashboard'], image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Selected work</h2>
            <p className="mt-4 text-slate-300">A glimpse into what we design, develop, and ship.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition">Let’s collaborate</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={p.image} alt="" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
