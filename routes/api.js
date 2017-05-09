var express = require('express'),
    router = express.Router(),
    ZoneController = require('../controllers/ZoneController')
    CommentController = require('../controllers/CommentController')

router.get('/:resource', (req, res, next) => {
    let resource = req.params.resource

    if (resource === 'zone') {
        ZoneController.find(req.query, (err, results) => {
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
    }
})

router.get('/:resource/:id', (req, res, next) => {
    let resource = req.params.resource
    let id = req.params.id

    if (resource === 'zone') {
        ZoneController.findById(id, (err, result) => {
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
    }
})

router.post('/:resource', (req, res, next) => {
    let resource = req.params.resource

    if (resource === 'zone') {
        ZoneController.create(req.body, (err, result) => {
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
    }
})

module.exports = router