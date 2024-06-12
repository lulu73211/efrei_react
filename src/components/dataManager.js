// src/dataManager.js
class DataManager {
    constructor() {
        this.students = [];
        this.courses = [];
        this.teachers = [];
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

    // Associer un professeur à un cours
    assignTeacherToCourse(courseId, teacherId) {
        const course = this.courses.find(course => course.id === courseId);
        if (course) {
            course.teacherId = teacherId;
        }
    }

    // Afficher le planning des cours
    getSchedule() {
        return this.courses.map(course => {
            const teacher = this.teachers.find(teacher => teacher.id === course.teacherId);
            return {
                courseName: course.name,
                teacherName: teacher ? teacher.name : "Non assigné",
                time: course.time
            };
        });
    }
}

const dataManager = new DataManager();

export default dataManager;
