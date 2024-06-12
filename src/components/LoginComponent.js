// src/components/LoginComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigate('/dashboard');
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <input 
                type="text" 
                placeholder="Nom d'utilisateur" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Mot de passe" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Connexion</button>
        </div>
    );
};

export default LoginComponent;
