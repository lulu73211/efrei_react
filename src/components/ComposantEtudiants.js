import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';
import BoutonRetour from './BoutonRetour';
import '../index.css';

const ComposantEtudiants = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [etudiants, setEtudiants] = useState(gestionnaireDeDonnees.obtenirEtudiants());

    const ajouterEtudiant = () => {
        if (!nom || !prenom) {
            alert('Veuillez entrer le nom et le prénom de l\'étudiant.');
            return;
        }
        const nouvelEtudiant = { id: Date.now(), name: nom, firstname: prenom };
        gestionnaireDeDonnees.ajouterEtudiant(nouvelEtudiant);
        setEtudiants(gestionnaireDeDonnees.obtenirEtudiants());
        setNom('');
        setPrenom('');
    };

    const supprimerEtudiant = (etudiantId) => {
        gestionnaireDeDonnees.supprimerEtudiant(etudiantId);
        setEtudiants(gestionnaireDeDonnees.obtenirEtudiants());
    };

    return (
        <div className="container">
            <h2>Gestion des étudiants</h2>
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
            />
            <button onClick={ajouterEtudiant}>Ajouter étudiant</button>
            <ul>
                {etudiants.map((etudiant) => (
                    <li key={etudiant.id}>
                        {etudiant.name} {etudiant.firstname}
                        <button onClick={() => supprimerEtudiant(etudiant.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <BoutonRetour />  {}
        </div>
    );
};

export default ComposantEtudiants;
