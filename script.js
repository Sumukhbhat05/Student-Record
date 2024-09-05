const studentform = document.getElementById('studentform');
const studentlist = document.getElementById('studentlist');
const errorDiv = document.getElementById('error');
const students = [];

studentform.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentid = document.getElementById('studentid').value;
    const studentname = document.getElementById('studentname').value;
    const studentage = document.getElementById('studentage').value;
    try {
        addStudent(studentid, studentname, studentage);
        displayStudents();
        errorDiv.textContent = "";
    } catch (error) {
        errorDiv.textContent = error.message;
    }
    studentform.reset();
});

function addStudent(id, name, age) {
    if (!id || !name || !age) {
        throw new Error('All fields must be filled out');
    }
    if (isNaN(age) || age <= 0) {
        throw new Error('Age must be a positive number');
    }
    const studentExists = students.some(student => student.id === id);
    if (studentExists) {
        throw new Error('Student ID already exists');
    }
    const student = {
        id,
        name,
        age: parseInt(age, 10),
    };
    students.push(student);
}

function displayStudents() {
    studentlist.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `id: ${student.id}, name: ${student.name}, age: ${student.age}`;
        studentlist.appendChild(li);
    });
}





















