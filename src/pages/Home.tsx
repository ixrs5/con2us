import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { FloatingPhotoCard } from "@/components/FloatingPhotoCard";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Suspense } from "react";

import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";

const heroPhotos = [
  { src: couple1, alt: "Together in golden hour" },
  { src: couple2, alt: "Sunset silhouette" },
  { src: couple3, alt: "Coffee shop moments" },
  { src: couple4, alt: "Tender embrace" },
  { src: couple5, alt: "Beach walk" },
  { src: couple6, alt: "Cherry blossom kiss" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-pink-100 to-peach-100" />}>
            <Hero3D />
          </Suspense>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary animate-float" />
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 glow-text">
              Tuhi & Siyam
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
              One Year of Forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Photos Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        
        <div className="container mx-auto relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
          >
            Our Story
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {heroPhotos.map((photo, index) => (
              <FloatingPhotoCard
                key={index}
                image={photo.src}
                index={index}
                alt={photo.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-muted-foreground mb-8 italic">
              "Every moment with you is a treasure. Here's to the first of many beautiful years together."
            </p>
            <a
              href="/moments"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Our Moments
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
