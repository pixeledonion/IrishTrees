import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Fade-and-rise reveal for all elements matching `selector` inside the returned
 * ref. Fully skipped (elements shown immediately) when the user prefers reduced
 * motion, so no content is ever hidden behind an animation that won't play.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  selector = '[data-reveal]',
) {
  const scope = useRef<T>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(selector);
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      targets.forEach((el) => (el.style.opacity = '1'));
      return;
    }

    const ctx = gsap.context(() => {
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [selector]);

  return scope;
}
