var express = require('express');
var router = express.Router();
var User = require('../models').User;
var passport = require('passport');
var url = require('url');

router.get('/login', (req, res) => {
    if(!req.user) {
        res.render('logIn/logIn');
    } else {
        res.redirect('/');
    }
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res, next) => {
        res.redirect("/");
    }
);

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

router.post('/register', (req, res, next) => {
    User.register(req.body['email'], req.body['password'], (error, user) => {
        User.update({ name: req.body.name }, { where: { id: user.id}}).then(updatedUser => {
            res.redirect('/');
        });
    });
});

router.get('/registration', (req, res) => {
    res.render('registration/new');
});

module.exports = router;