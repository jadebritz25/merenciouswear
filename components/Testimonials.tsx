const testimonials = [
  {
    name: 'Thandi M.',
    role: 'Bride',
    quote:
      'Puseletso brought my dream dress to life. The attention to detail was extraordinary — every guest asked who made my gown.',
  },
  {
    name: 'Kgomotso S.',
    role: 'Corporate Client',
    quote:
      'Our team uniforms look incredible. MerenciousWear understood our brand perfectly and delivered beyond expectations.',
  },
  {
    name: 'Lerato N.',
    role: 'Occasion Wear Client',
    quote:
      'I wore a MerenciousWear piece to a gala and I have never received so many compliments. Truly luxurious craftsmanship.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Kind Words</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight">
            What Our <span className="italic text-gold">Clients Say</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gold/20 p-8">
              <p className="text-gold text-3xl font-heading mb-4">"</p>
              <p className="text-cream/65 text-sm leading-relaxed italic font-body mb-6">{t.quote}</p>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-cream font-body font-semibold text-sm">{t.name}</p>
              <p className="text-gold/80 text-xs tracking-widest uppercase font-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
