# Merenciouswear Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy an elegant luxury fashion landing page for Merenciouswear (Klerksdorp, NW) that drives bookings and leads via WhatsApp and a contact form.

**Architecture:** Single-page Next.js 14 app (App Router) with section-based scroll layout. All sections live in `app/page.tsx` composed from `components/`. Deployed to Vercel, source on GitHub.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, next/font (Google Fonts: Bodoni Moda + Montserrat), next/image, Vercel

## Global Constraints

- Colors: Cream `#F5F0E8`, Black `#0A0A0A`, Champagne Gold `#C9A96E`
- Fonts: Bodoni Moda (headings), Montserrat (body)
- No backend — forms submit via WhatsApp deep link or mailto
- Logo file: `public/logo.jpeg` (copied from `C:\Users\Jade\Downloads\Merenciouswear-logo.jpeg`)
- WhatsApp number: 0626270767 (link format: `https://wa.me/27626270767`)
- Instagram: `@MerenciousWear`
- Email: MerenciousWear@gmail.com
- Address: 3320 Isikungati St Ext 7 West, Klerksdorp, 2574

---

### Task 1: Scaffold Next.js project + branding config

**Files:**
- Create: `Merenciouswear/` (project root via `create-next-app`)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `public/logo.jpeg` (copy from Downloads)

- [ ] **Step 1: Create Next.js project**

```bash
cd "C:\Users\Jade\Desktop\Mark1\Projects"
npx create-next-app@latest Merenciouswear --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```

- [ ] **Step 2: Copy logo into public folder**

```bash
cp "C:\Users\Jade\Downloads\Merenciouswear-logo.jpeg" "C:\Users\Jade\Desktop\Mark1\Projects\Merenciouswear\public\logo.jpeg"
```

- [ ] **Step 3: Update tailwind.config.ts with brand tokens**

Replace content of `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        gold: '#C9A96E',
        'gold-dark': '#A8874A',
        ink: '#0A0A0A',
      },
      fontFamily: {
        heading: ['var(--font-bodoni)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 4: Update app/layout.tsx with fonts and base meta**

```typescript
import type { Metadata } from 'next'
import { Bodoni_Moda, Montserrat } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Merenciouswear | Custom Fashion Design — Klerksdorp',
  description:
    'Bespoke custom garments crafted with elegance. Book your fitting with Merenciouswear in Klerksdorp, North West.',
  keywords: ['custom wear', 'fashion design', 'Klerksdorp', 'bespoke garments', 'Merenciouswear'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${montserrat.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 5: Update app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

- [ ] **Step 6: Commit**

```bash
cd "C:\Users\Jade\Desktop\Mark1\Projects\Merenciouswear"
git add -A
git commit -m "feat: scaffold Next.js project with brand tokens and fonts"
```

---

### Task 2: Navbar component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create components directory and Navbar**

```typescript
// components/Navbar.tsx
'use client'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Merenciouswear logo" width={40} height={40} className="object-contain" />
          <span className="font-heading text-gold text-lg tracking-widest uppercase hidden sm:block">
            Merenciouswear
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-cream/80 hover:text-gold text-xs tracking-widest uppercase font-body transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gold mb-1.5" />
          <span className="block w-6 h-0.5 bg-gold mb-1.5" />
          <span className="block w-6 h-0.5 bg-gold" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-gold/20">
          <ul className="flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-cream/80 hover:text-gold text-xs tracking-widest uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add responsive Navbar with gold brand accent"
```

---

### Task 3: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```typescript
// components/Hero.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with dual CTAs"
```

---

### Task 4: About section

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: Create About component**

```typescript
// components/About.tsx
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
          <div className="relative bg-ink/5 aspect-[3/4] flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.jpeg"
              alt="Merenciouswear"
              width={300}
              height={300}
              className="object-contain p-12 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add About section with brand story"
```

---

### Task 5: Services / Custom Wear section

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Create Services component**

```typescript
// components/Services.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add Services section with 4 offering cards"
```

---

### Task 6: Gallery section

**Files:**
- Create: `components/Gallery.tsx`

- [ ] **Step 1: Create Gallery component (placeholder grid — client provides photos)**

```typescript
// components/Gallery.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Gallery.tsx
git commit -m "feat: add Gallery section with placeholder grid"
```

---

### Task 7: Testimonials section

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials component**

```typescript
// components/Testimonials.tsx
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
      'Our team uniforms look incredible. Merenciouswear understood our brand perfectly and delivered beyond expectations.',
  },
  {
    name: 'Lerato N.',
    role: 'Event Guest',
    quote:
      'I wore a Merenciouswear piece to a gala and I have never received so many compliments. Truly luxurious craftsmanship.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-ink">
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
              <p className="text-cream/70 text-sm leading-relaxed italic font-body mb-6">{t.quote}</p>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="text-cream font-body font-semibold text-sm">{t.name}</p>
              <p className="text-gold/70 text-xs tracking-widest uppercase font-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: add Testimonials section with 3 placeholder quotes"
```

---

### Task 8: Booking form section

**Files:**
- Create: `components/Booking.tsx`

- [ ] **Step 1: Create Booking component (form submits via WhatsApp)**

```typescript
// components/Booking.tsx
'use client'
import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    garmentType: '',
    date: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi Merenciouswear! I'd like to book a fitting.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nGarment: ${form.garmentType}\nPreferred Date: ${form.date}\nNotes: ${form.notes}`
    )
    window.open(`https://wa.me/27626270767?text=${msg}`, '_blank')
  }

  const field = (
    label: string,
    key: keyof typeof form,
    type = 'text',
    placeholder = ''
  ) => (
    <div>
      <label className="block text-cream/60 text-xs tracking-widest uppercase mb-2 font-body">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="w-full bg-transparent border border-gold/30 text-cream px-4 py-3 text-sm font-body focus:outline-none focus:border-gold placeholder:text-cream/20"
      />
    </div>
  )

  return (
    <section id="booking" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Get Started</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink leading-tight">
            Book a <span className="italic text-gold">Fitting</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
        <form onSubmit={handleSubmit} className="bg-ink p-8 sm:p-12 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {field('Your Name *', 'name', 'text', 'Puseletso Dlamini')}
            {field('Phone Number *', 'phone', 'tel', '0612345678')}
          </div>
          {field('Email Address', 'email', 'email', 'you@example.com')}
          <div>
            <label className="block text-cream/60 text-xs tracking-widest uppercase mb-2 font-body">
              Garment Type *
            </label>
            <select
              value={form.garmentType}
              onChange={(e) => setForm({ ...form, garmentType: e.target.value })}
              className="w-full bg-ink border border-gold/30 text-cream px-4 py-3 text-sm font-body focus:outline-none focus:border-gold"
            >
              <option value="">Select a category</option>
              <option>Bridal &amp; Formal Wear</option>
              <option>Everyday Custom Pieces</option>
              <option>Corporate Wear</option>
              <option>Event &amp; Occasion Wear</option>
              <option>Other</option>
            </select>
          </div>
          {field('Preferred Date', 'date', 'date')}
          <div>
            <label className="block text-cream/60 text-xs tracking-widest uppercase mb-2 font-body">
              Additional Notes
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your vision..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-transparent border border-gold/30 text-cream px-4 py-3 text-sm font-body focus:outline-none focus:border-gold placeholder:text-cream/20 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gold text-ink text-xs tracking-widest uppercase font-body font-semibold hover:bg-gold-dark transition-colors"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Booking.tsx
git commit -m "feat: add Booking form with WhatsApp submission"
```

---

### Task 9: Contact + Footer + WhatsApp FAB

**Files:**
- Create: `components/Contact.tsx`
- Create: `components/WhatsAppButton.tsx`

- [ ] **Step 1: Create Contact component**

```typescript
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
```

- [ ] **Step 2: Create WhatsApp floating action button**

```typescript
// components/WhatsAppButton.tsx
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27626270767"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.851L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.021-1.378l-.36-.214-3.732.889.9-3.643-.235-.374A9.818 9.818 0 1112 21.818z" />
      </svg>
    </a>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx components/WhatsAppButton.tsx
git commit -m "feat: add Contact section, Footer, and WhatsApp FAB"
```

---

### Task 10: Assemble page + newsletter signup

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx with assembled page**

```typescript
// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full single-page layout"
```

---

### Task 11: GitHub repo + Vercel deploy

**Files:** None (infra only)

- [ ] **Step 1: Create GitHub repository**

```bash
cd "C:\Users\Jade\Desktop\Mark1\Projects\Merenciouswear"
gh repo create merenciouswear --public --description "Merenciouswear — Custom Fashion Design Landing Page" --push --source=.
```

- [ ] **Step 2: Deploy to Vercel**

```bash
npx vercel --yes --prod
```

Follow the prompts:
- Link to existing project? No
- Project name: `merenciouswear`
- Directory: `./`

- [ ] **Step 3: Note the deployment URL and share with user**
