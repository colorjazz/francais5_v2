import React, { useState } from 'react';

export default function Francais() {
  const [feuilleNotes, setFeuilleNotes] = useState('');

  return (
    <div>
      <p>Préparation à la lettre ouverte (environ 500 mots).</p>
      
      <section style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <h3>Section A : Lire et apprécier des textes variés</h3>
        <p><strong>Dossier préparatoire :</strong> Explorez le corpus thématique figé de 5 à 8 textes.</p>
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Générer le corpus (IA)</button>
      </section>

      <section style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <h3>Section B : Communiquer oralement</h3>
        <p><strong>Discussion :</strong> Interagissez avec l'IA pour débattre et consolider vos arguments.</p>
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Démarrer la simulation de débat</button>
      </section>

      <section style={{ backgroundColor: '#eef5ff', border: '1px solid #b8daff', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <h3>Section C : Écriture (Lettre ouverte)</h3>
        <div style={{ marginBottom: '15px' }}>
          <label><strong>Feuille de notes (style télégraphique) :</strong></label>
          <br/>
          <textarea 
            rows="6" 
            style={{ width: '100%', marginTop: '10px' }}
            value={feuilleNotes} 
            onChange={e => setFeuilleNotes(e.target.value)}
            placeholder="Saisissez vos mots-clés, sources et idées ici. La sauvegarde est automatique."
          />
          <br/>
          <button style={{ padding: '8px 12px', marginTop: '10px', cursor: 'pointer' }}>Valider la conformité (Évaluateur IA)</button>
        </div>
        <div style={{ borderTop: '1px solid #b8daff', paddingTop: '15px' }}>
          <button style={{ backgroundColor: '#d9534f', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Lancer l'épreuve d'écriture (Chronomètre : 3h15)
          </button>
        </div>
      </section>
    </div>
  );
}