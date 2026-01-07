import { useEffect, useState } from "react";
import classes from "./FallingLeaves.module.css";

const TOTAL_LEAVES = 20;

function FallingLeaves() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classes.leavesWrapper}
      style={{ transform: `translateY(${-scrollY}px)` }}
    >
      {Array.from({ length: TOTAL_LEAVES }).map((_, i) => {
        // Random shade of green: light (60%) to dark (30%)
        const shade = 30 + Math.random() * 30;
        return (
          <div
            key={i}
            className={classes.leaf}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
              backgroundColor: `hsl(120, 70%, ${shade}%)`, // 120 = green hue
            }}
          />
        );
      })}
    </div>
  );
}

export default FallingLeaves;
