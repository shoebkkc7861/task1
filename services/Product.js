const { products } = require("../Model/Product")


async function addProduct(param) {

    try {

        const file = param.imgPath.imgPath;
        const path = __dirname + file.name
        file.mv(path, (err) => {
            if (err) {
                return { data: err }
            }
        })
        param.imgPath = path
        console.log(path)
        let product = await products.addProduct(param)

        if (product.errno) {
            return { data: product.sqlMessage }
        }
        return { data: product }
    }
    catch (err) {

        return { data: err }
    }


}

async function multipleFiles(param) {
    let pathArray = []

    const file = param.url.coverfile;

    for (let i of file) {
        let path = __dirname + i.name
        pathArray.push(path)
        i.mv(path, (err) => {
            if (err) {
                return { data: err }
            }
        })

    }

    let dataArray = []
    for (let i of pathArray) {
        dataArray.push({ productId: param.productId, url: i })
    }
    console.log(dataArray);

    let userData = await products.multipleFiles(dataArray)
    return userData
}




module.exports = {
    product: {
        addProduct,
        multipleFiles
    }
}