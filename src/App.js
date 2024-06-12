import { useEffect, useState } from 'react';
import './App.scss';
import Content from './components/Content';

function App() {

  // Валюта
  let [wallet, setWallet] = useState(100)
  let [showCards, setShowCards] = useState(false)

  return (
    <div className="App">
      <div className='cash'>
        <span>{wallet} coins</span>
        <button onClick={() => setShowCards(true)}>+</button>
      </div>

      <Content wallet={wallet} setWallet={setWallet} showCards={showCards} setShowCards={setShowCards} />
    </div>
  );
}

export default App;
