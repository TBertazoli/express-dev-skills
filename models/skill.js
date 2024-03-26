const skills = [
  { name: "HTML", completed: true },
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Node.js", completed: false },
  { name: "Express", completed: false },
  { name: "React", completed: false },
  { name: "MongoDB", completed: false },
  { name: "Python", completed: false },
  { name: "Django", completed: false },
  { name: "SQL", completed: false },
  { name: "PostgreSQL", completed: false },
  { name: "MySQL", completed: true },
  { name: "Git", completed: true },
  { name: "Postman", completed: false },
  { name: "Heroku", completed: false },
];

module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
