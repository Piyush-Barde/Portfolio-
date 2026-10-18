import { useEffect, useState } from "react";
import { useInView } from "./useInView.js";
import "./Stats.css";

// Counts from 0 up to `to` once `run` becomes true.
function CountUp({ to, run }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }

    let frame;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3)))); // ease-out
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, to]);

  return <>{n}</>;
}

function Stats({ stats = [], animate = true }) {
  const [ref, seen] = useInView();
  if (!stats.length) return null;

  return (
    <section className="stats content-section" ref={ref} aria-label="Highlights">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <p className="stat-value">
            {typeof stat.value === "number" && animate ? (
              <CountUp to={stat.value} run={seen} />
            ) : (
              stat.value
            )}
            {stat.suffix}
          </p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;