"use client";

import { motion } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";
import { businessData, aiContent } from "@/data/site-data";

export function HeroSection() {
  const heroImage = businessData.images[0] || null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {heroImage && (
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={businessData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container-custom relative z-10 text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            {businessData.rating && (
              <>
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{businessData.rating}</span>
                <span className="text-foreground/50">•</span>
              </>
            )}
            <span className="text-sm text-foreground/70">{businessData.category}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            <span className="gradient-text">{aiContent.tagline}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {aiContent.heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              {aiContent.ctaButtonText || "Get Started"}
            </a>
            <a
              href="#services"
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Our Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          {businessData.reviewsCount && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-center gap-6 text-sm text-foreground/50"
            >
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="ml-1">{businessData.rating}/5</span>
              </div>
              <span>•</span>
              <span>{businessData.reviewsCount}+ Happy Clients</span>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
