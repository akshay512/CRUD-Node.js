const express= require('express');
const router= express.Router();
const userpost= require('../model/post');

router.get('/', (req, res) => {
    res.send('Hey Thats a post')
})

router.get('/specific',(req,res)=>{
    res.send('specific post')
})

router.post('/',(req,res)=>{
    console.log(req.body.title)
    
    const Post= new userpost({
        title: req.body.title,
        description: req.body.description,
    })
    
    Post.save().then(data=>{
        res.json(data);
    })
})

module.exports=router;