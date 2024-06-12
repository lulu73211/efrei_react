// src/components/dataManager.js
class DataManager {
    constructor() {
        this.students = [];
        this.courses = [];
        this.teachers = [];
        this.enrollments = [];
        this.schedule = [];
    }

    // Gestion des étudiants
    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
    }

    getStudents() {
        return this.students;
    }

    // Gestion des cours
    addCourse(course) {
        this.courses.push(course);
    }

    removeCourse(courseId) {
        this.courses = this.courses.filter(course => course.id !== courseId);
    }

    getCourses() {
        return this.courses;
    }

    // Gestion des professeurs
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    removeTeacher(teacherId) {
        this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
    }

    getTeachers() {
        return this.teachers;
    }

    // Gestion des inscriptions
    enrollStudentToCourse(enrollment) {
        this.enrollments.push(enrollment);
    }

    removeEnrollment(enrollmentId) {
        this.enrollments = this.enrollments.filter(enrollment => enrollment.id !== enrollmentId);
    }

    getEnrollments() {
        return this.enrollments;
    }

    // Gestion du planning
    addScheduleEntry(day, startTime, endTime, teacherName, courseName) {
        this.schedule.push({
            id: Date.now(),
            day,
            startTime,
            endTime,
            teacherName,
            courseName
        });
    }

    getSchedule() {
        return this.schedule;
    }
}

const dataManager = new DataManager();

export default dataManager;
