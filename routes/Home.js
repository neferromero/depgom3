/* Homerouter */

const router = require('express').Router();

const { getHome, updateHome, createHome } = require('../controllers/home');

router.post('/', createHome);
router.get('/', getHome);
router.put('/:id', updateHome);

module.exports = router;