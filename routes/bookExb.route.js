const express = require("express");

const router = express.Router();

const bookExbController = require("../controllers/bookExb.controller");


router.get("/add", bookExbController.viewBookExbForm); // View BE add form
router.post("/add", bookExbController.addBookExb); // Add new BE

router.get("/", bookExbController.viewBookExb); // View all live BE
router.get("/viewBookExb/:id", bookExbController.viewBEById); // View all BE by Id
//router.get('/upcoming', bookExbController.viewUpBookExb); // View upcoming BE

router.get("/addApplicant/:id", bookExbController.viewApplicantForm); // View Applicant add form
router.post("/addApplicant/:id", bookExbController.addApplicantBE); // Add new applicant

router.get('/delete/:id', bookExbController.viewDeletePage); // view BE delete form
router.post('/delete/:id', bookExbController.deleteBookExb); // delete BE

module.exports = router;
