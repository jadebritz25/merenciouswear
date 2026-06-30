const INSTAGRAM = "https://www.instagram.com/merenciouswear?igsh=N3I4cHkyOTh5NXl4&utm_source=qr";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Get In Touch</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight">
            Let&apos;s <span className="italic text-gold">Connect</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Location</p>
            <p className="text-cream/65 text-sm font-body leading-relaxed">
              Klerksdorp, North West &amp; Johannesburg
              <br />
              <span className="text-cream/40 text-xs italic">
                Studio address shared after booking confirmation
              </span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Contact</p>
            <a
              href="https://wa.me/27626270767"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-cream/65 text-sm font-body hover:text-gold transition-colors"
            >
              0626 270 767
            </a>
            <a
              href="mailto:MerenciousWear@gmail.com"
              className="block text-cream/65 text-sm font-body hover:text-gold transition-colors mt-1"
            >
              MerenciousWear@gmail.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Social</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/65 text-sm font-body hover:text-gold transition-colors"
            >
              @merenciouswear
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs font-body">
            © {new Date().getFullYear()} Merencious (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs font-body">
            Website by{' '}
            <a
              href="https://webnets.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WebNets
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
