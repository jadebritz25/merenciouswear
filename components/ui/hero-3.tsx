"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const ActionButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <motion.a
    href={href ?? "#booking"}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 inline-block px-8 py-3 bg-gold text-ink font-body font-semibold text-xs tracking-widest uppercase shadow-lg transition-colors hover:bg-gold-dark focus:outline-none"
  >
    {children}
  </motion.a>
);

const SecondaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <motion.a
    href={href ?? "https://wa.me/27626270767"}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 inline-block px-8 py-3 border border-gold text-gold font-body font-semibold text-xs tracking-widest uppercase transition-colors hover:bg-gold/10 focus:outline-none"
  >
    {children}
  </motion.a>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  secondaryCtaText,
  secondaryCtaHref,
  ctaHref,
  images,
  className,
}) => {
  const FADE_IN = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];

  return (
    <section
      id="home"
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-ink flex flex-col items-center justify-center text-center px-4 pt-16",
        className
      )}
    >
      {/* Gold decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent ml-12" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent mr-12" />
      </div>

      {/* Text content */}
      <div className="z-10 flex flex-col items-center pb-56 md:pb-72">
        {/* Tagline pill */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          className="mb-6 inline-block border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-body font-medium text-gold tracking-widest uppercase backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="font-heading text-cream text-5xl sm:text-7xl md:text-8xl leading-tight"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-md text-cream/60 text-sm sm:text-base font-body leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
          {secondaryCtaText && (
            <SecondaryButton href={secondaryCtaHref}>
              {secondaryCtaText}
            </SecondaryButton>
          )}
        </motion.div>
      </div>

      {/* Animated image marquee at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-56 md:h-72 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4 h-full items-end pb-4"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-44 md:h-60 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -3 : 4}deg`,
              }}
            >
              <img
                src={src}
                alt={`Merenciouswear piece ${(index % images.length) + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-cream/30 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};
