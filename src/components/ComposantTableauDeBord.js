import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ComposantTableauDeBord = () => {
    return (
        <div className="container">
            <h2>Tableau de bord</h2>
            <nav>
                <ul>
                    <li><Link to="/étudiants">Gestion des étudiants</Link></li>
                    <li><Link to="/cours">Gestion des cours</Link></li>
                    <li><Link to="/inscriptions">Gestion des inscriptions</Link></li>
                    <li><Link to="/professeurs">Gestion des professeurs</Link></li>
                    <li><Link to="/calendrier">Emploi du temps</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default ComposantTableauDeBord;
