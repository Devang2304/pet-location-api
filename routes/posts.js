const express = require('express');
const router= express.Router();
const Posts=require('../models/post');


// get back all the posts
router.get('/',async (req, res) => {
    // res.send('We are on post');
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (error) {
        res.json({message: err});
    }
});

// submits a post
router.post('/',async (req, res) => {
    const post =new Posts({
        title:req.body.title,
        discription:req.body.discription,
    });
    //you can do this
    // post.save()
    // .then((data) => {
    //     res.json(data);
    // }).catch((err) => {
    //     res.json(err.message);
    // });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({message :err});
    }
});

//specific post by using id
router.get('/:postId',async (req, res) => {
    try {
        const post=await Posts.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message : error});
    }
});

//delete a post
router.delete('/:postId',async (req, res) => {
    try {
        const removedPost = await Posts.deleteOne({_id :req.params.postId});
        res.send('Deleted the post');
    } catch (error) {
        res.json({message : error});  
    }
});

//update a post

// router.put('/:postId',async (req, res) => {
//     try {
//         const updatedPost = await Posts.findByIdAndUpdate(req.params.postId,{
//             title:req.body.title,

router.patch('/:postId',async (req, res) => {
    try {
        const updatedPost= await Posts.updateOne({_id :req.params.postId},{$set: {title:req.body.title}});
        res.json(updatedPost);
    } catch (error) {
        res.json({message : error});
    }
});
module.exports = router;