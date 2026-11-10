const express = require("express")
const supjectController = require("../controllers/subject.controller")
const router = express.Router();

router.get("/", supjectController.getAllSubjects);
router.get("/:id", supjectController.getSubjectById);
router.post("/", supjectController.createSubject);
router.put("/:id", supjectController.updateSubject);
router.delete("/:id", supjectController.deleteSubject);

module.exports = router;