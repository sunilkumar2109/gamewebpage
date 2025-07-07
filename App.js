import React from 'react';
import './App.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

function App() {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert(`Welcome ${res.user.displayName}`);
      })
      .catch((err) => alert('Login Failed'));
  };

  return (
    <div className="app">
      <video autoPlay loop muted className="bgVideo">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1>Welcome to GameEarn</h1>
        <p>Pay and Play Games – Win Real Coins 💰</p>
        <button onClick={handleLogin}>Login with Google</button>

        <h2>Featured Games</h2>
        <div className="grid">
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Ludo Royale" />
            <p>Ludo Royale</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Fruit Ninja" />
            <p>Fruit Ninja</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Car Racing" />
            <p>Car Racing</p>
          </div>
        </div>

        <h2>FAQs</h2>
        <ul className="faq">
          <li><b>Q:</b> How do I earn coins?<br /><b>A:</b> Win games!</li>
          <li><b>Q:</b> Is it paid?<br /><b>A:</b> Yes, pay to play and win.</li>
        </ul>

        <h2>What Players Say</h2>
        <div className="grid">
          <div className="card">🔥 “Won 1000 coins in 2 days!”</div>
          <div className="card">💸 “Addictive & rewarding experience.”</div>
        </div>
      </div>
    </div>
  );
}

export default App;
