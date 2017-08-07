var express = require('express');
var router = express.Router();
var User = require('../models').User;
var passport = require('passport');

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.json(req.session);
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res, next) => {
        res.redirect("/");
    }
);

router.delete('/logout', (req, res) => {
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