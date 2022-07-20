const express = require('express');
const router = express.Router()

var { Students } = require('../controller/index')

router.post('/', Students.create_student);
router.get('/', Students.get_all_student);
router.put('/:id', Students.update_student_byid);
router.delete('/:id', Students.delete_student_byid);

module.exports = router



