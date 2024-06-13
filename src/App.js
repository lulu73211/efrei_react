import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComposantTableauDeBord from './components/ComposantTableauDeBord';
import ComposantEtudiants from './components/ComposantEtudiants';
import ComposantCours from './components/ComposantCours';
import ComposantProfesseurs from './components/ComposantProfesseurs';
import ComposantInscriptions from './components/ComposantInscriptions';
import ComposantPlanning from './components/ComposantPlanning';

function App() {
    return (
        <Router>
            <Routes>
                {}
                <Route path="/" element={<ComposantTableauDeBord />} />
                <Route path="/dashboard" element={<ComposantTableauDeBord />} />
                <Route path="/étudiants" element={<ComposantEtudiants />} />
                <Route path="/cours" element={<ComposantCours />} />
                <Route path="/professeurs" element={<ComposantProfesseurs />} />
                <Route path="/inscriptions" element={<ComposantInscriptions />} />
                <Route path="/calendrier" element={<ComposantPlanning />} />
            </Routes>
        </Router>
    );
}

export default App;
