import Image from 'next/image'

const photos = Array.from({ length: 11 }, (_, i) => ({
  src: `/gallery/photo-${i + 1}.jpeg`,
  alt: `Merenciouswear custom piece ${i + 1}`,
}))

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
          {photos.map((photo, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-ink/10 relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-cream text-xs tracking-widest uppercase font-body">
                  Custom Piece
                </span>
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
