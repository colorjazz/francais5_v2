import React from 'react';
import Francais from './components/Francais';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #0056b3', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#0056b3' }}>Simulateur de l'épreuve ministérielle - Français 5e secondaire</h1>
      </header>
      <main>
        <Francais />
      </main>
    </div>
  );
}
export default App;