import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';
import BoutonRetour from './BoutonRetour';
import '../index.css';

// Composant pour la gestion des cours
const ComposantCours = () => {
    const [nomCours, setNomCours] = useState('');
    const [heure, setHeure] = useState('');
    const [cours, setCours] = useState(gestionnaireDeDonnees.obtenirCours());

    const ajouterCours = () => {
        if (nomCours && heure) {
            const nouveauCours = { id: Date.now(), name: nomCours, time: heure };
            gestionnaireDeDonnees.ajouterCours(nouveauCours);
            setCours(gestionnaireDeDonnees.obtenirCours());
            setNomCours('');
            setHeure('');
        }
    };

    const supprimerCours = (coursId) => {
        gestionnaireDeDonnees.supprimerCours(coursId);
        setCours(gestionnaireDeDonnees.obtenirCours());
    };

    return (
        <div className="container">
            <h2>Gestion des cours</h2>
            <input
                type="text"
                placeholder="Nom du cours"
                value={nomCours}
                onChange={(e) => setNomCours(e.target.value)}
            />
            <input
                type="text"
                placeholder="Horaire"
                value={heure}
                onChange={(e) => setHeure(e.target.value)}
            />
            <button onClick={ajouterCours}>Ajouter cours</button>
            <ul>
                {cours.map((cours) => (
                    <li key={cours.id}>
                        {cours.name} - {cours.time}
                        <button onClick={() => supprimerCours(cours.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <BoutonRetour />  {}
        </div>
    );
};

export default ComposantCours;
