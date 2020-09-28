const express = require('express');
const router = express.Router();
const userpost = require('../model/post');

router.get('/', async (req, res) => {
    const posts = await userpost.find();
    res.json(posts);
})

router.get('/:postid', async (req, res) => {
    const post = await userpost.findById(req.params.postid)
    res.json(post)
})

router.post('/', async (req, res) => {


    const Post = new userpost({
        title: req.body.title,
        description: req.body.description,
    })
    const Savedpost = await Post.save();
    res.json(Savedpost);

})

router.delete('/:postid',async(req,res)=>{
    const deletedpost= await userpost.remove({_id: req.params.postid});
    res.json(deletedpost)
})

router.patch('/:postid',async(req,res)=>{
    const updatedpost= await userpost.updateOne({_id:req.params.postid},{$set:{title:req.body.title}})
    res.json(updatedpost)
})

module.exports = router;