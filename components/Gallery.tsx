const placeholders = Array.from({ length: 6 }, (_, i) => i + 1)

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Portfolio</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink leading-tight">
            Our <span className="italic text-gold">Work</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((n) => (
            <div
              key={n}
              className="aspect-[3/4] bg-ink/10 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-cream text-xs tracking-widest uppercase font-body">
                  Custom Piece
                </span>
              </div>
              {/* Replace src with actual client photos */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-ink/20 font-heading text-6xl">{n}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-ink/40 text-xs mt-8 font-body tracking-wider">
          Follow us on Instagram{' '}
          <a
            href="https://instagram.com/MerenciousWear"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            @MerenciousWear
          </a>{' '}
          for the latest creations
        </p>
      </div>
    </section>
  )
}
