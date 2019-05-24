const express = require('express')
const router = express.Router()

const newCtrl = require('../controllers/new.controller')

router.get('/', newCtrl.getNews)

router.get('/:id', newCtrl.getNew)

router.post('/', newCtrl.createNew)

router.put('/:id', newCtrl.editNew)

router.delete('/:id', newCtrl.removeNew)

module.exports = router