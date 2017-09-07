var express = require('express');
var router = express.Router();
var Comment = require('../models').Comment;
var User = require('../models').User;

/* GET home page. */
router.post('/vapeshop/:id/comments', (req, res) => {
    console.log(req.body.text);
    Comment.create({
        user_id: req.user.id,
        vapeshop_id: req.params.id,
        text: req.body.text
    },
    { include: [User] }).then((comment) => {
        res.status(201);
        res.json({
            comment: comment,
            user: req.user
        });
    });
});

router.delete('/vapeshop/:vapeshop_id/comments/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then((obj) => {
        res.status(202);
        res.json({
            id: obj.id
        });
    });
});
module.exports = router;
