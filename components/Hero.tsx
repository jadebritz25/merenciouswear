import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const GALLERY_IMAGES = Array.from(
  { length: 11 },
  (_, i) => `/gallery/photo-${i + 1}.jpeg`
);

export default function Hero() {
  return (
    <AnimatedMarqueeHero
      tagline="Bespoke Fashion · Klerksdorp, North West"
      title={
        <>
          <span className="text-cream">Merencious</span>
          <br />
          <span className="text-gold italic">wear</span>
        </>
      }
      description="Every stitch tells your story. Custom garments crafted with elegance and intention, made only for you."
      ctaText="Book a Fitting"
      ctaHref="#booking"
      secondaryCtaText="WhatsApp Us"
      secondaryCtaHref="https://wa.me/27626270767"
      images={GALLERY_IMAGES}
    />
  );
}
