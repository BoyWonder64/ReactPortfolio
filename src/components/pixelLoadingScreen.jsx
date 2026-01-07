import { useEffect, useState } from "react";
import classes from "./pixelLoadingScreen.module.css";
import backgroundImage from "../assets/portal.gif";

const TOTAL_TILES = 18;
const FADE_DURATION = 1600; // must match CSS transition

function PixelLoader({ show }) {
  const [filledTiles, setFilledTiles] = useState(0);
  const [visible, setVisible] = useState(show);

  // Handle tile progress
  useEffect(() => {
    if (!show) {
      setFilledTiles(0);
      return;
    }

    setVisible(true);

    const interval = setInterval(() => {
      setFilledTiles((prev) => (prev >= TOTAL_TILES ? TOTAL_TILES : prev + 1));
    }, 140);

    return () => clearInterval(interval);
  }, [show]);

  // Handle fade-out + unmount
  useEffect(() => {
    if (!show) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, FADE_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`${classes.loader} ${!show ? classes.fadeOut : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.overlay} />

      <div className={classes.box}>
        <p className={classes.text}>LOADING PAGE</p>

        <div className={classes.bar}>
          {Array.from({ length: TOTAL_TILES }).map((_, i) => (
            <div
              key={i}
              className={`${classes.tile} ${
                i < filledTiles ? classes.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PixelLoader;
