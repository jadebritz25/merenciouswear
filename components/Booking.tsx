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
      `Hi MerenciousWear! I'd like to book a fitting.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nGarment: ${form.garmentType}\nPreferred Date: ${form.date}\nNotes: ${form.notes}`
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
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-body">Get Started</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink leading-tight">
            Book a <span className="italic text-gold">Fitting</span>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        <p className="text-center text-ink/60 text-sm font-body leading-relaxed mb-10 max-w-xl mx-auto">
          To secure your consultation or fitting, please complete the form below. Bookings are
          confirmed through WhatsApp and email.{' '}
          <span className="text-gold font-medium">
            Please note: A deposit is required to secure production space.
          </span>
        </p>

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
              <option>Bridal &amp; Matric</option>
              <option>Signature Custom Piece</option>
              <option>Corporate Wear</option>
              <option>Occasion Wear</option>
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
