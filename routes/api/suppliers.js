const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/suppliers');
// const { validateBody, isValidId } = require('../../midelwares');
// const { schemas } = require('../../schemas/contact');

router.get('/', ctrl.getSuppliers);

module.exports = router;
