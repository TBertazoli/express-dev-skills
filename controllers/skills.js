const Skills = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

function create(req, res) {
  //add the new skill to the skills array
  Skills.create(req.body);
  //Always do a redirect when data has been changed
  res.redirect("/skills");
}

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
    title: "Skill List",
  });
}
