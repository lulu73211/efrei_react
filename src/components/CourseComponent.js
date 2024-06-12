import React, { useState } from 'react';
import dataManager from './dataManager';

const CourseComponent = () => {
    const [courseName, setCourseName] = useState('');
    const [time, setTime] = useState('');
    const [courses, setCourses] = useState(dataManager.getCourses());

    // Fonction pour ajouter un nouveau cours
    const handleAddCourse = () => {
        if (courseName && time) { // Vérifie que les champs ne sont pas vides
            const newCourse = { id: Date.now(), name: courseName, time };
            dataManager.addCourse(newCourse);
            setCourses(dataManager.getCourses());
            setCourseName(''); // Réinitialise le champ du nom du cours
            setTime(''); // Réinitialise le champ de l'horaire
        }
    };

    // Fonction pour supprimer un cours existant
    const handleRemoveCourse = (courseId) => {
        dataManager.removeCourse(courseId);
        setCourses(dataManager.getCourses());
    };

    return (
        <div>
            <h2>Gestion des cours</h2>
            <input
                type="text"
                placeholder="Nom du cours"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Horaire"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={handleAddCourse}>Ajouter cours</button>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name} - {course.time}
                        <button onClick={() => handleRemoveCourse(course.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseComponent;
