// src/components/TeacherComponent.js
import React, { useState } from 'react';
import dataManager from './dataManager';

const TeacherComponent = () => {
    const [teacherName, setTeacherName] = useState('');
    const [teachers, setTeachers] = useState(dataManager.getTeachers());

    const handleAddTeacher = () => {
        const newTeacher = { id: Date.now(), name: teacherName };
        dataManager.addTeacher(newTeacher);
        setTeachers(dataManager.getTeachers());
        setTeacherName('');
    };

    const handleRemoveTeacher = (teacherId) => {
        dataManager.removeTeacher(teacherId);
        setTeachers(dataManager.getTeachers());
    };

    return (
        <div>
            <h2>Gestion des professeurs</h2>
            <input
                type="text"
                placeholder="Nom du professeur"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
            />
            <button onClick={handleAddTeacher}>Ajouter professeur</button>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher.id}>
                        {teacher.name}
                        <button onClick={() => handleRemoveTeacher(teacher.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherComponent;
