import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const GALLERY_IMAGES = Array.from(
  { length: 11 },
  (_, i) => `/gallery/photo-${i + 1}.jpeg`
);

const INSTAGRAM = "https://www.instagram.com/merenciouswear?igsh=N3I4cHkyOTh5NXl4&utm_source=qr";

export default function Hero() {
  return (
    <AnimatedMarqueeHero
      tagline="Bespoke Fashion · Klerksdorp, North West"
      title={
        <>
          <span className="text-cream">Merencious</span>
          <span className="text-gold">Wear</span>
          <br />
          <span className="block text-cream/40 text-base sm:text-xl font-body font-normal tracking-[0.35em] uppercase not-italic mt-2">
            couture &amp; custom occasion wear
          </span>
        </>
      }
      description="Every stitch tells your story. Custom garments crafted with elegance and intention, made only for you."
      ctaText="Book a Fitting"
      ctaHref="#booking"
      secondaryCtaText="View Our Work"
      secondaryCtaHref={INSTAGRAM}
      images={GALLERY_IMAGES}
    />
  );
}
