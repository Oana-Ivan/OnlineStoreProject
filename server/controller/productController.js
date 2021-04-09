const Productdb = require('../model/model');

// create and save new product
exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    // new product
    const product = new Productdb({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        rating: req.body.rating
    })

    // save product in the database
    product.save(product).then(data => {
        res.redirect('/');
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error - create new product"
        });
    });

}

// get all products/ one product
exports.find = (req, res) => {
    if (req.query.id) {
        // find one product
        const id = req.query.id;
        Productdb.findById(id).then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found product with id " + id})
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error - find product"})
        })
    } else {
        // find all products
        Productdb.find().then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error - find product"})
        })
    }
}

// update product
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const id = req.params.id;
    Productdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update product ${id}`})
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({ message: "Error - update product"})
    })
}

// delete product
exports.delete = (req, res) => {
    const id = req.params.id;

    Productdb.findByIdAndDelete(id)
    .then(data => {
        if (!data) {
            res.status(404).send({message: `Cannot delete product with id ${id}`})
        } else {
            res.send({
                message: "Product deleted"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Cannot delete product with id " + id
        })
    });
}