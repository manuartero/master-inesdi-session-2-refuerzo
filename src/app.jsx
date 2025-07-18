import { Card } from "./components/card";

import "./app.css";

const tarotCards = ["fool", "empress", "tower", "tower", "tower", "tower"];

function App() {
  return (
    <div className="cardList">
      {tarotCards.map((card, i) => (
        <Card key={i} variant={card} />
      ))}
    </div>
  );
}

export default App;
