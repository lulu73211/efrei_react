// src/components/StudentComponent.js
import React, { useState } from 'react';

const StudentComponent = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleAddStudent = () => {
        setStudents([...students, { name, age }]);
        setName('');
        setAge('');
    };

    return (
        <div>
            <h2>Gestion des étudiants</h2>
            <input 
                type="text" 
                placeholder="Nom" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Âge" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <button onClick={handleAddStudent}>Ajouter étudiant</button>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name} - {student.age} ans</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentComponent;
