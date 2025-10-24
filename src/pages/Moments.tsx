import { Navigation } from "@/components/Navigation";
import { Lightbox } from "@/components/Lightbox";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";
import moment7 from "@/assets/moment-7.jpg";
import moment8 from "@/assets/moment-8.jpg";
import moment9 from "@/assets/moment-9.jpg";
import moment10 from "@/assets/moment-10.jpg";
import moment11 from "@/assets/moment-11.jpg";
import moment12 from "@/assets/moment-12.jpg";
import moment13 from "@/assets/moment-13.jpg";
import moment14 from "@/assets/moment-14.jpg";
import moment15 from "@/assets/moment-15.jpg";
import moment16 from "@/assets/moment-16.jpg";
import moment17 from "@/assets/moment-17.jpg";
import moment18 from "@/assets/moment-18.jpg";
import moment19 from "@/assets/moment-19.jpg";
import moment20 from "@/assets/moment-20.jpg";
import moment21 from "@/assets/moment-21.jpg";
import moment22 from "@/assets/moment-22.jpg";
import moment23 from "@/assets/moment-23.jpg";
import moment24 from "@/assets/moment-24.jpg";

const moments = [
  { src: moment1, caption: "Dancing in the evening light", date: "January 2024" },
  { src: moment2, caption: "Picnic in the park", date: "February 2024" },
  { src: moment3, caption: "Cooking together", date: "February 2024" },
  { src: moment4, caption: "Stargazing night", date: "March 2024" },
  { src: moment5, caption: "Cozy reading time", date: "March 2024" },
  { src: moment6, caption: "Gift exchange", date: "April 2024" },
  { src: moment7, caption: "Perfect selfie", date: "April 2024" },
  { src: moment8, caption: "Coffee date", date: "May 2024" },
  { src: moment9, caption: "Mountain adventure", date: "May 2024" },
  { src: moment10, caption: "Sunset together", date: "June 2024" },
  { src: moment11, caption: "Amusement park fun", date: "June 2024" },
  { src: moment12, caption: "Ice skating", date: "July 2024" },
  { src: moment13, caption: "Movie night", date: "July 2024" },
  { src: moment14, caption: "Boat ride", date: "August 2024" },
  { src: moment15, caption: "Birthday celebration", date: "August 2024" },
  { src: moment16, caption: "Rainy day romance", date: "September 2024" },
  { src: moment17, caption: "Art gallery visit", date: "September 2024" },
  { src: moment18, caption: "Playing with pets", date: "October 2024" },
  { src: moment19, caption: "Farmers market", date: "October 2024" },
  { src: moment20, caption: "Christmas decorating", date: "November 2024" },
  { src: moment21, caption: "Peaceful morning", date: "November 2024" },
  { src: moment22, caption: "Love letters", date: "December 2024" },
  { src: moment23, caption: "City lights", date: "December 2024" },
  { src: moment24, caption: "Anniversary toast", date: "December 2024" },
];

const IMAGES_PER_PAGE = 9;

const Moments = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(moments.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentMoments = moments.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPreviousPage();
      if (e.key === 'ArrowRight') goToNextPage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen pb-12">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-12">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-12 text-foreground">
          Our Moments
        </h1>
        
        {/* Page Counter */}
        <div className="text-center mb-8 text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </div>

        {/* Gallery Grid with Page Turn Animation */}
        <div className="relative max-w-6xl mx-auto" style={{ perspective: '2000px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.3 },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentMoments.map((moment, index) => (
                <motion.div
                  key={startIndex + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square overflow-hidden rounded-2xl cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setLightboxImage(startIndex + index)}
                >
                  <img
                    src={moment.src}
                    alt={moment.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {currentPage > 0 && (
            <button
              onClick={goToPreviousPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          )}
          
          {currentPage < totalPages - 1 && (
            <button
              onClick={goToNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1);
                setCurrentPage(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-primary w-8' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <Lightbox
          image={moments[lightboxImage].src}
          caption={moments[lightboxImage].caption}
          date={moments[lightboxImage].date}
          onClose={() => setLightboxImage(null)}
          isOpen={lightboxImage !== null}
        />
      )}
    </div>
  );
};

export default Moments;
