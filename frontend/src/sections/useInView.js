import { useEffect, useRef, useState } from "react";

const OPTIONS = { threshold: 0.2 };

export function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        observer.disconnect();
      }
    }, OPTIONS);
    observer.observe(el);
    return () => observer.disconnect();
  }, [seen]);

  return [ref, seen];
}