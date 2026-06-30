// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Get In Touch</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight">
            Let's <span className="italic text-gold">Connect</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Location</p>
            <p className="text-cream/70 text-sm font-body leading-relaxed">
              3320 Isikungati Street
              <br />
              Extension 7 West
              <br />
              Klerksdorp, 2574
            </p>
          </div>
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Contact</p>
            <a
              href="https://wa.me/27626270767"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-cream/70 text-sm font-body hover:text-gold transition-colors"
            >
              0626 270 767
            </a>
            <a
              href="mailto:MerenciousWear@gmail.com"
              className="block text-cream/70 text-sm font-body hover:text-gold transition-colors mt-1"
            >
              MerenciousWear@gmail.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-3 font-body">Social</p>
            <a
              href="https://instagram.com/MerenciousWear"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 text-sm font-body hover:text-gold transition-colors"
            >
              @MerenciousWear
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs font-body">
            © {new Date().getFullYear()} Merencious (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs font-body">
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
