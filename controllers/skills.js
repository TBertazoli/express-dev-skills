const Skills = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
};

function newSkill(req, res) {
  res.render("skills/new", {
    title: "Add Skill",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skills.getOne(req.params.id),
    title: " Skill List",
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skills.getAll(),
  });
}
