var express = require('express'),
    router = express.Router(),
    controllers = require('../controllers')

router.get('/:resource', (req, res, next) => {
    let resource = req.params.resource
    let controller = controllers[resource]
    if (controller == null) {
        res.json({
            status: 500,
            msg: 'Invalid Resource Request: ' + resource 
        })
        return
    }

    controller.find(req.query, (err, results) => {
        if (err) {
            res.json({
                status: 500,
                msg: err
            })
            return
        }

        res.json({
            status: 200,
            results: results
        })
    })
})

router.get('/:resource/:id', (req, res, next) => {
    let resource = req.params.resource
    let id = req.params.id
    let controller = controllers[resource]
    if (controller == null) {
        res.json({
            status: 500,
            msg: 'Invalid Resource Request: ' + resource 
        })
        return
    }

    controller.findById(id, (err, result) => {
        if (err) {
            res.json({
                status: 500,
                msg: err
            })
            return
        }

        res.json({
            status: 200,
            result: result
        })
    })
})

router.post('/:resource', (req, res, next) => {
    let resource = req.params.resource
    let controller = controllers[resource]
    if (controller == null) {
        res.json({
            status: 500,
            msg: 'Invalid Resource Request: ' + resource 
        })
        return
    }

    controller.create(req.body, (err, result) => {
        if (err) {
            res.json({
                status: 500,
                msg: err
            })
            return
        }

        res.json({
            status: 200,
            result: result
        })
    })
})

router.delete('/:resource', (req, res, next) => {
    let resource = req.params.resource
    let id = req.params.id
    let controller = controllers[resource]
    if (controller == null) {
        res.json({
            status: 500,
            msg: 'Invalid Resource Request: ' + resource 
        })
        return
    }

    controller.destroy(id, (err, result) => {
        if (err) {
            res.json({
                status: 500,
                msg: err
            })
            return
        }

        res.json({
            status: 200,
            result: null
        })
    })
})

// router.put('/:resource', (req, res, next) => {
//     let resource = req.params.resource
// })

module.exports = router