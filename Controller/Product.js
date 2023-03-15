const { product } = require("../services/Product")
const { validation } = require("../validator/product")


productObj = {}


productObj.add = async (req, res) => {


    validation.addProduct(req, res)

    let form_data = {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        imgPath: req.files,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }

    let data = await product.addProduct(form_data)
    console.log(data)
    res.send(data)

}

productObj.addMultiple = async (req, res) => {
    let formData = {
        productId: req.body.productId,
        url: req.files
    }

    let data = await product.multipleFiles(formData)
    res.send(data)
}

module.exports = productObj