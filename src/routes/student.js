const router = require("express").Router();
const studentController = require("../controllers/student.controller");

router.route("/create").post(studentController.create);
router.route("/list").get(studentController.list);
router.route("/find/:id").get(studentController.findOne);
router.route("/delete/:id").delete(studentController.findOneAndDelete);

module.exports = router;
