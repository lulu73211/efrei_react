// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';
import EnrollmentComponent from './components/EnrollmentComponent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/dashboard" element={<DashboardComponent />} />
                <Route path="/students" element={<StudentComponent />} />
                <Route path="/courses" element={<CourseComponent />} />
                <Route path="/enrollments" element={<EnrollmentComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
