var express = require('express');
var router = express.Router();
var Comment = require('../models').Comment;

/* GET home page. */
router.post('/vapeshop/:id/comments', (req, res) => {
    console.log("HERE!");
    Comment.create({
        user_id: req.user.id,
        vapeshop_id: req.params.id,
        text: req.body.text
    }).then((comment) => {
        res.redirect('/vapeshop/' + req.params.id);
    });
});

router.delete('/vapeshop/:vapeshop_id/comments/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/vapeshop/' + req.params.vapeshop_id);
    });
});
module.exports = router;
