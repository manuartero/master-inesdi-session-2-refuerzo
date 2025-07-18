import empress from "./assets/empress.png";
import fool from "./assets/fool.png";
import tower from "./assets/tower.png";

import styles from "./card.module.css";

const cardImages = {
  fool: fool,
  empress: empress,
  tower: tower,
};

export function Card({ variant }) {
  const image = cardImages[variant];
  return (
    <div className={styles.card}>
      <img src={image} alt={variant} />
    </div>
  );
}
