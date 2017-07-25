var express = require('express');
var router = express.Router();
var VapeShops = require('../models').VapeShop;

router.get('/vapeshops',(req, res) => {
    VapeShops.findAll().then(vapeshops => {
        res.render('vapeshops/index', {vapeshops: vapeshops});
    });
});

router.get('/vapeshop/:id', (req, res) => {
    var id = req.params.id;
    VapeShops.find({
        where: {
            id: id
        }
    }).then(vapeshop => {
        res.render('vapeshops/show', {vapeshop: vapeshop});
    });
});

router.get('/vapeshops/new', (req, res) => {
    res.render('vapeshops/new');
});

router.post('/vapeshops', (req, res) => {
    VapeShops.create(req.body).then(vapeshop => {
        res.redirect('/vapeshop/' + vapeshop.id);
    });
});

router.get('/vapeshop/:id/edit', (req, res) => {
    VapeShops.find({
        where: {
            id: req.params.id
        }
    }).then((vapeshop) => {
        res.render('vapeshops/edit',{vapeshop: vapeshop});
    });
});

router.put('/vapeshop/:id', (req, res) => {
    VapeShops.find({
        where: {
            id: req.params.id
        }
    }).then((vapeshop) => {
        vapeshop.updateAttributes(req.body).then((vapeshop) => {
            res.redirect('/vapeshop/' + vapeshop.id);
        });
    });
});

router.delete('/vapeshop/:id', (req, res) => {
    VapeShops.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/vapeshops');
    });
});

module.exports = router;