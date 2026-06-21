import { useEffect, useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { CheckCircle } from 'lucide-react';
import styles from './BeforeAfter.module.css';

import beforeDesktop from '../../assets/images/bathroom-before-desktop.webp';
import afterDesktop from '../../assets/images/bathroom-after-desktop.webp';

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    let frame;
    const start = performance.now();

    const animate = (time) => {
      const progress = (time - start) / 7000;
      const value = 50 + Math.sin(progress) * 35;

      setPosition(value);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div
            className={styles.sliderBox}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
          >
            <ReactCompareSlider
              position={position}
              onPositionChange={setPosition}
              itemOne={
                <ReactCompareSliderImage
                  src={afterDesktop}
                  alt="Badezimmer nach der Renovierung"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={beforeDesktop}
                  alt="Badezimmer vor der Renovierung"
                />
              }
              style={{
                width: '100%',
                height: '100%',
              }}
            />

            <span className={styles.labelBefore}>Nachher</span>
            <span className={styles.labelAfter}>Vorher</span>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>Vorher & Nachher</p>

            <h2 className={styles.title}>
              Sichtbare Veränderung durch saubere Sanierung
            </h2>

            <p className={styles.text}>
              Aus einem veralteten Badezimmer entsteht ein moderner, heller und
              funktionaler Raum mit hochwertigen Materialien.
            </p>

            <ul className={styles.list}>
              <li>
                <CheckCircle size={21} /> Alte Flächen professionell entfernt
              </li>
              <li>
                <CheckCircle size={21} /> Neue Oberflächen sauber verarbeitet
              </li>
              <li>
                <CheckCircle size={21} /> Moderne Optik mit langlebigen
                Materialien
              </li>
              <li>
                <CheckCircle size={21} /> Funktionale und helle Raumgestaltung
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
