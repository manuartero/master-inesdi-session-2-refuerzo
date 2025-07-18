import { Card } from "./components/card";
import { useState } from "react";

import "./app.css";

const tarotCards = ["fool", "empress", "tower", "death"];

export function App() {
  const [focusedCard, setFocusedCard] = useState();

  return (
    <main className="app">
      <div className="cardList" role="list">
        {tarotCards.map((card, i) => (
          <Card key={`card-${i}`} variant={card} onClick={setFocusedCard} />
        ))}
      </div>

      <section className="focusedCard" role="region">
        <Card variant={focusedCard} size="large" />
      </section>
    </main>
  );
}
