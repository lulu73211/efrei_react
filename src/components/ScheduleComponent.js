// src/components/ScheduleComponent.js
import React, { useState } from 'react';
import dataManager from './dataManager';
import './ScheduleComponent.css';

const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const ScheduleComponent = () => {
    const [day, setDay] = useState('Lundi');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [schedule, setSchedule] = useState(dataManager.getSchedule());
    const [error, setError] = useState('');

    const handleAddScheduleEntry = () => {
        if (!day || !startTime || !endTime || !teacherName || !courseName) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        dataManager.addScheduleEntry(day, startTime, endTime, teacherName, courseName);
        setSchedule(dataManager.getSchedule());
        setDay('Lundi');
        setStartTime('');
        setEndTime('');
        setTeacherName('');
        setCourseName('');
        setError('');
    };

    const getScheduleEntriesForDay = (day) => {
        return schedule.filter(entry => entry.day === day);
    };

    const getTimeSlot = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 2 + (minute === 30 ? 1 : 0);
    };

    return (
        <div>
            <h2>Planning des cours</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>
                    Jour:
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        {daysOfWeek.map(d => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Heure de début:
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </label>
                <label>
                    Heure de fin:
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </label>
                <label>
                    Nom du professeur:
                    <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                    />
                </label>
                <label>
                    Nom du cours:
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </label>
                <button onClick={handleAddScheduleEntry}>Ajouter</button>
            </div>
            <div className="schedule-grid">
                {daysOfWeek.map(day => (
                    <div key={day} className="schedule-column">
                        <h3>{day}</h3>
                        {getScheduleEntriesForDay(day).map(entry => (
                            <div
                                key={entry.id}
                                className="schedule-entry"
                                style={{
                                    backgroundColor: '#ffcccb',
                                    gridRowStart: `${getTimeSlot(entry.startTime) + 1}`,
                                    gridRowEnd: `${getTimeSlot(entry.endTime) + 1}`
                                }}
                            >
                                <p>{entry.courseName}</p>
                                <p>{entry.teacherName}</p>
                                <p>{entry.startTime} - {entry.endTime}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScheduleComponent;
