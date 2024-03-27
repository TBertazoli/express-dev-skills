const { v4: uuidv4 } = require("uuid");
const newId = uuidv4();

const skills = [
  { id: newId, name: "HTML", completed: true },
  { id: newId, name: "CSS", completed: true },
  { id: newId, name: "JavaScript", completed: true },
  { id: newId, name: "Node.js", completed: false },
  { id: newId, name: "Express", completed: false },
  { id: newId, name: "React", completed: false },
  { id: newId, name: "MongoDB", completed: false },
  { id: newId, name: "Python", completed: false },
  { id: newId, name: "Django", completed: false },
  { id: newId, name: "SQL", completed: false },
  { id: newId, name: "PostgreSQL", completed: false },
  { id: newId, name: "MySQL", completed: true },
  { id: newId, name: "Git", completed: true },
  { id: newId, name: "Postman", completed: false },
  { id: newId, name: "Heroku", completed: false },
];

module.exports = {
  getAll,
  getOne,
};

function getOne(id) {
  return skills.find((s) => s.id === parseInt(id));
}

function getAll() {
  return skills;
}
