const skills = [
  { id: 1, name: "HTML", completed: true },
  { id: 2, name: "CSS", completed: true },
  { id: 3, name: "JavaScript", completed: true },
  { id: 4, name: "Node.js", completed: false },
  { id: 5, name: "Express", completed: false },
  { id: 6, name: "React", completed: false },
  { id: 7, name: "MongoDB", completed: false },
  { id: 8, name: "Python", completed: false },
  { id: 9, name: "Django", completed: false },
  { id: 10, name: "SQL", completed: false },
  { id: 11, name: "PostgreSQL", completed: false },
  { id: 12, name: "MySQL", completed: true },
  { id: 13, name: "Git", completed: true },
  { id: 14, name: "Postman", completed: false },
  { id: 15, name: "Heroku", completed: false },
];

module.exports = {
  getAll,
  getOne,
};

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}
