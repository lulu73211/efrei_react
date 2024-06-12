// src/components/EnrollmentComponent.js
import React, { useState } from 'react';

const EnrollmentComponent = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [studentName, setStudentName] = useState('');
    const [courseName, setCourseName] = useState('');

    const handleEnroll = () => {
        setEnrollments([...enrollments, { studentName, courseName }]);
        setStudentName('');
        setCourseName('');
    };

    return (
        <div>
            <h2>Gestion des inscriptions</h2>
            <input 
                type="text" 
                placeholder="Nom de l'étudiant" 
                value={studentName} 
                onChange={(e) => setStudentName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Nom du cours" 
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
            />
            <button onClick={handleEnroll}>Inscrire</button>
            <ul>
                {enrollments.map((enrollment, index) => (
                    <li key={index}>{enrollment.studentName} inscrit à {enrollment.courseName}</li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentComponent;
