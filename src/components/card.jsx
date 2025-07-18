import empress from "./assets/empress.png";
import fool from "./assets/fool.png";
import tower from "./assets/tower.png";
import death from "./assets/death.png";

import styles from "./card.module.css";

const cardImages = {
  fool: fool,
  empress: empress,
  tower: tower,
  death: death,
};

export function Card({ variant, size = "small", onClick }) {
  if (!variant || !cardImages[variant]) {
    return <></>;
  }

  const image = cardImages[variant];
  return (
    <aside
      role="listitem"
      className={`${styles.card} ${styles[size]}`}
      onClick={() => onClick && onClick(variant)}
    >
      <img src={image} alt={variant} />
    </aside>
  );
}
