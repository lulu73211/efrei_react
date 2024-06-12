// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';
import TeacherComponent from './components/TeacherComponent';
import EnrollmentComponent from './components/EnrollmentComponent';
import ScheduleComponent from './components/ScheduleComponent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/dashboard" element={<DashboardComponent />} />
                <Route path="/students" element={<StudentComponent />} />
                <Route path="/courses" element={<CourseComponent />} />
                <Route path="/teachers" element={<TeacherComponent />} />
                <Route path="/enrollments" element={<EnrollmentComponent />} />
                <Route path="/schedule" element={<ScheduleComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
