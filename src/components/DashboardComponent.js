// src/components/DashboardComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
    return (
        <div>
            <h2>Tableau de bord</h2>
            <nav>
                <ul>
                    <li><Link to="/students">Gestion des étudiants</Link></li>
                    <li><Link to="/courses">Gestion des cours</Link></li>
                    <li><Link to="/enrollments">Gestion des inscriptions</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardComponent;
