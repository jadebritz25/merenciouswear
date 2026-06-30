import Image from 'next/image'

const portfolioPieces = [
  { src: '/gallery/portfolio-1.jpeg', alt: 'Merenciouswear custom piece' },
  { src: '/gallery/portfolio-2.jpeg', alt: 'Merenciouswear custom piece' },
  { src: '/gallery/portfolio-3.jpeg', alt: 'Merenciouswear custom piece' },
]

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {portfolioPieces.map((piece, i) => (
            <div
              key={i}
              className="aspect-[3/4] relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-cream text-xs tracking-widest uppercase font-body">
                  Custom Piece
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-ink/40 text-xs font-body tracking-wider mb-4">
            Want to see more?
          </p>
          <a
            href="https://www.instagram.com/merenciouswear?igsh=N3I4cHkyOTh5NXl4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-gold text-gold text-xs tracking-widest uppercase font-body font-semibold hover:bg-gold/10 transition-colors"
          >
            View More on Instagram @MerenciousWear
          </a>
        </div>
      </div>
    </section>
  )
}
