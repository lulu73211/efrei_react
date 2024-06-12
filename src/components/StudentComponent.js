// src/components/StudentComponent.js
import React, { useState } from 'react';
import dataManager from './dataManager';

const StudentComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [students, setStudents] = useState(dataManager.getStudents());

    const handleAddStudent = () => {
        const newStudent = { id: Date.now(), name, age };
        dataManager.addStudent(newStudent);
        setStudents(dataManager.getStudents());
        setName('');
        setAge('');
    };

    const handleRemoveStudent = (studentId) => {
        dataManager.removeStudent(studentId);
        setStudents(dataManager.getStudents());
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
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} ans
                        <button onClick={() => handleRemoveStudent(student.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentComponent;
