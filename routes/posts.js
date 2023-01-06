const express = require('express');
const router= express.Router();
const Posts=require('../models/post');

router.get('/', (req, res) => {
    res.send('We are on post');
});

router.post('/', (req, res) => {
    const post =new Posts({
        title:req.body.title,
        discription:req.body.discription,
    });
    post.save()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err.message);
    });
});

module.exports = router;