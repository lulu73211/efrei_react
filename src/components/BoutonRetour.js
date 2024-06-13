import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 
const BoutonRetour = () => {
    const navigate = useNavigate();

    return (
        <button className="bouton-retour" onClick={() => navigate(-1)}>
            Retour
        </button>
    );
};

export default BoutonRetour;
