import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface FloatingPhotoCardProps {
  image: string;
  index: number;
  alt?: string;
}

export const FloatingPhotoCard = ({ image, index, alt = "Couple moment" }: FloatingPhotoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      setRotation({
        x: deltaY * 10,
        y: deltaX * 10,
      });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group"
      style={{
        transform: `perspective(1000px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="aspect-[4/5] bg-white p-3">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};
