// src/components/CourseComponent.js
import React, { useState } from 'react';

const CourseComponent = () => {
    const [courses, setCourses] = useState([]);
    const [courseName, setCourseName] = useState('');

    const handleAddCourse = () => {
        setCourses([...courses, courseName]);
        setCourseName('');
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
            <button onClick={handleAddCourse}>Ajouter cours</button>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseComponent;
