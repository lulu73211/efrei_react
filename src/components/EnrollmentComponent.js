// src/components/EnrollmentComponent.js
import React, { useState } from 'react';
import dataManager from './dataManager';

const EnrollmentComponent = () => {
    const [studentName, setStudentName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [enrollments, setEnrollments] = useState(dataManager.getEnrollments());
    const [error, setError] = useState('');

    const handleEnrollStudent = () => {
        if (!studentName || !courseName) {
            setError('Veuillez entrer le nom de l\'étudiant et le nom du cours.');
            return;
        }

        const enrollment = {
            id: Date.now(),
            studentName: studentName,
            courseName: courseName
        };

        dataManager.enrollStudentToCourse(enrollment);
        setEnrollments(dataManager.getEnrollments());
        setStudentName('');
        setCourseName('');
        setError('');
    };

    const handleRemoveEnrollment = (enrollmentId) => {
        dataManager.removeEnrollment(enrollmentId);
        setEnrollments(dataManager.getEnrollments());
    };

    return (
        <div>
            <h2>Gestion des inscriptions</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Nom de l'étudiant"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Nom du cours"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
            </div>
            <button onClick={handleEnrollStudent}>Inscrire</button>
            <ul>
                {enrollments.map((enrollment) => (
                    <li key={enrollment.id}>
                        {enrollment.studentName} - {enrollment.courseName}
                        <button onClick={() => handleRemoveEnrollment(enrollment.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentComponent;
