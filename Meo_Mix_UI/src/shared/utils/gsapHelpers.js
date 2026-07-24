import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const animateTextReveal = (target, options = {}) => {
  if (!target) return;
  return gsap.fromTo(
    target,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger
      },
      ...options
    }
  );
};
