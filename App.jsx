import React from 'react';
import './App.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

import GameShowcase from './components/GameShowcase';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';

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
        <GameShowcase />
        <h2>FAQs</h2>
        <FAQ />
        <h2>What Players Say</h2>
        <SocialProof />
      </div>
    </div>
  );
}

export default App;
