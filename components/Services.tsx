const services = [
  {
    title: 'Bridal & Formal Wear',
    desc: 'Custom-designed gowns, suits, and formal attire tailored to your exact measurements and vision.',
    icon: '◇',
  },
  {
    title: 'Everyday Custom Pieces',
    desc: 'Elevate your wardrobe with bespoke casual and smart-casual garments made only for you.',
    icon: '◇',
  },
  {
    title: 'Corporate Wear',
    desc: 'Professional uniforms and corporate attire that carry your brand identity with distinction.',
    icon: '◇',
  },
  {
    title: 'Event & Occasion Wear',
    desc: 'Stand out at any event with statement pieces designed around your personality and the occasion.',
    icon: '◇',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">What We Do</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight">
            Custom Wear,
            <br />
            <span className="italic text-gold">Crafted for You</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gold/20 p-8 hover:border-gold/60 transition-colors group"
            >
              <span className="text-gold text-2xl block mb-4">{s.icon}</span>
              <h3 className="font-heading text-cream text-xl mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
