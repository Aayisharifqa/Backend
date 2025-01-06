const express =require('express');
let router =express.Router();


// router.get("/",(req,res)=>{
//     res.send("ABC");
// })
// router.get("/newuser",(req,res)=>{
//     res.send("DEF");
// })

// router.get("/delete",(req,res)=>{
//     res.send("DHI");
// })




router.get("/:id",(req,res)=>{
    res.send("retrive id value" + req.params.id);
})
router.put("/:id",(req,res)=>{
    res.send("update this id value" + req.params.id);
})
router.delete("/:id",(req,res)=>{
    res.send("delete this id value" + req.params.id);
})
module.exports=router;