const services = [
  {
    title: 'Bridal & Matric',
    desc: 'Custom-designed bridal gowns and matric farewell dresses tailored to your exact measurements and vision.',
    icon: '◇',
  },
  {
    title: 'Signature Custom Piece',
    desc: 'A garment made uniquely for you — bespoke designs that express your personal style and identity.',
    icon: '◇',
  },
  {
    title: 'Corporate Wear',
    desc: 'Professional uniforms and corporate attire that carry your brand identity with distinction.',
    icon: '◇',
  },
  {
    title: 'Occasion Wear',
    desc: 'Stand out at any event with statement pieces designed around your personality and the occasion.',
    icon: '◇',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Our Services</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink leading-tight">
            Made for
            <br />
            <span className="italic text-gold">your Moment</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gold/30 p-8 hover:border-gold/70 transition-colors group bg-white/40"
            >
              <span className="text-gold text-2xl block mb-4">{s.icon}</span>
              <h3 className="font-heading text-ink text-xl mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-ink/55 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
