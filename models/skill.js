const skills = [
  { id: 123456, name: "HTML", completed: true },
  { id: 234567, name: "CSS", completed: true },
  { id: 345678, name: "JavaScript", completed: true },
  { id: 456789, name: "Node.js", completed: false },
  { id: 567890, name: "Express", completed: false },
  { id: 678901, name: "React", completed: false },
  { id: 789012, name: "MongoDB", completed: false },
  { id: 890123, name: "Python", completed: false },
  { id: 901234, name: "Django", completed: false },
  { id: 101234, name: "SQL", completed: false },
  { id: 111234, name: "PostgreSQL", completed: false },
  { id: 121234, name: "MySQL", completed: true },
  { id: 131234, name: "Git", completed: true },
  { id: 141234, name: "Postman", completed: false },
  { id: 151234, name: "Heroku", completed: false },
];

module.exports = {
  getAll,
  getOne,
  create,
};
function create(skill) {
  //add the id
  skill.id = Date.now() % 1000000;
  skill.completed = false;
  skills.push(skill);
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}
