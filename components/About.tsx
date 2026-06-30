import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Our Story</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink mb-6 leading-tight">
            Fashion Born From
            <br />
            <span className="italic text-gold">Purpose</span>
          </h2>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-ink/70 leading-relaxed mb-6 font-body">
            Merenciouswear was founded by Puseletso Merencious with a singular vision: to create
            garments that celebrate identity, culture, and confidence. Based in Klerksdorp, North
            West, we bring bespoke fashion to those who refuse to settle for ordinary.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8 font-body">
            Every piece we create is a collaboration — your vision, our craft. From formal wear to
            custom everyday pieces, we pour elegance into every stitch.
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-ink text-cream text-xs tracking-widest uppercase font-body font-semibold hover:bg-ink/80 transition-colors"
          >
            Start Your Journey
          </a>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30" />
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/our-story.jpeg"
              alt="Merenciouswear — Fashion Born From Purpose"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
