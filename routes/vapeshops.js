var express = require('express');
var router = express.Router();
var models = require('../models');
var VapeShops = models.VapeShop;
var Location = models.Location;

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
        },
        include: [{
            model: Location
        }]
    }).then(vapeshop => {
        res.render('vapeshops/show', {vapeshop: vapeshop});
    });
});

router.get('/vapeshops/new', (req, res) => {
    res.render('vapeshops/new');
});

router.post('/vapeshops', (req, res) => {
    VapeShops.create({
        name: req.body.name,
        description: req.body.description
    }).then((vapeshop) =>{
        Location.create({address: req.body.address, vapeshop_id: vapeshop.id, lat: req.body.lat, lng: req.body.lng}).then((location) => {
            res.redirect('vapeshop/' + location.vapeshop_id);
        });
    });
});

router.get('/vapeshop/:id/edit', (req, res) => {
    VapeShops.find({
        where: {
            id: req.params.id
        },
        include: [{model: Location}]
    }).then((vapeshop) => {

        res.render('vapeshops/edit',{vapeshop: vapeshop});
    });
});

router.put('/vapeshop/:id', (req, res) => {
    console.log("htllo");
    VapeShops.find({
        where: {
            id: req.params.id
        },
        include:[{model: Location}]
    }).then((vapeshop) => {
        vapeshop.updateAttributes({name: req.body.name, description: req.body.description}).then(vapeshop => {
            var location = vapeshop.Location;
            console.log("==ADDRESS= " + req.body.lat);
            location.updateAttributes({ address: req.body.address, lat: req.body.lat, lng: req.body.lng}).then(location => {
                res.redirect('/vapeshop/' + location.vapeshop_id);
            });
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