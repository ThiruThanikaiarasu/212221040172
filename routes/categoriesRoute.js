const express = require('express')
const router = express.Router()

const { getAllProducts } = require('../controllers/categoriesController')

router.get(
    '/:categoryname/products',
    getAllProducts
)

module.exports = router