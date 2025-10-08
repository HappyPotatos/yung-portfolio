import React, { useRef, useState, useEffect } from "react";

const FadeInSection = ({ children, fadeInThreshold = 0, fadeOutThreshold = 1 }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Fade in when the element is "fadeInThreshold" visible
          if (entry.intersectionRatio >= fadeInThreshold) {
            setVisible(true);
          }
          // Fade out when the element is less than "fadeOutThreshold" visible
          else if (entry.intersectionRatio < fadeOutThreshold) {
            setVisible(false);
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), 
        // thresholds = [0, 0.05, 0.1, ..., 1]
      }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [fadeInThreshold, fadeOutThreshold]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;