const productModel = require('../models/categoriesModel')

const getAllProducts = async (request, response) => {
    const { categoryname } = request.params
    const {page} = request.query || 1
    const {limit} = request.query.limit || 10

    try{
        const products = await productModel
                                .find({
                                    productType: categoryname
                                })
                                .skip(page)
                                .limit(limit)
        console.log(products)
        response.status(200).send(products)
    }
    catch(error) {
        response.status(500).send(error.message)
    }
}

module.exports = {
    getAllProducts
}