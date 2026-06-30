export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-ink overflow-hidden pt-16"
    >
      {/* Gold decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent ml-12" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent mr-12" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-body">
          Klerksdorp, North West
        </p>
        <h1 className="font-heading text-cream text-5xl sm:text-7xl md:text-8xl leading-tight mb-6">
          Merencious
          <br />
          <span className="text-gold italic">wear</span>
        </h1>
        <p className="text-cream/60 text-sm sm:text-base tracking-wide max-w-md mx-auto mb-10 font-body">
          Bespoke garments crafted with intention. Every stitch tells your story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="px-8 py-4 bg-gold text-ink text-xs tracking-widest uppercase font-body font-semibold hover:bg-gold-dark transition-colors"
          >
            Book a Fitting
          </a>
          <a
            href="https://wa.me/27626270767"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gold text-gold text-xs tracking-widest uppercase font-body font-semibold hover:bg-gold/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  )
}
