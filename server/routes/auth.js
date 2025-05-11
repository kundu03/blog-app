const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER

router.post("/register", async (req,res) => {
    try {
        const user1 = await User.findOne({email: req.body.email});
        if(user1) return res.status(400).json("User already exists with this email.");
        if(req.body.password.length < 6) return res.status(400).json("Password should be atleast 6 characters.");
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpass, 
        });
        
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

// LOGIN

router.post("/login/username", async (req,res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(400).json("User Not Found!");
        const validated = await bcrypt.compare(req.body.password,user.password);
        console.log(validated);
        if(!validated) return res.status(400).json("Wrong Password");
        const {password, ...others} = user._doc;
        return res.status(200).json(others);
    } catch(err) {
        return res.status(500).json(err);
    }
});

router.post("/login/email", async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json("User Not Found!");
        const validated = await bcrypt.compare(req.body.password,user.password);
        if(!validated) return res.status(400).json("Wrong Password");
        const {password, ...others} = user._doc;
        return res.status(200).json(others);
    } catch(err) {
        return res.status(500).json(err);
    }
});

// ChangePassword
router.post("/changepassword", async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json("User Not Found!");
        if(req.body.password.length < 6) return res.status(400).json("Password should be atleast 6 characters.");
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(req.body.password,salt);
        user.password = hashedpass;
        await user.save();
        return res.status(200).json("Password Changes successfully!!!");
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;