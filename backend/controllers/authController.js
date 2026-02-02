import express from 'express';
import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const handleLogin = async  (req,res)=>{
try{
    //retriving data
    const{email, password} = req.body;

    //validate credentials
    if(!email || !password){
        return res.status(400).json({message:"all fields are required"})
    }
    //checking if user exists or not
    const testUser = await User.findOne({email}) 

    if(!testUser){
        return res.status(409).json({message:"Invalid credentials"});
    }

    const isMatch = await bcrypt.compare(password, testUser.password)

    if(!isMatch){
        return res.status(409).json({message:"invalid credentials"})
    }

     req.session.user = {
      id: testUser._id,
      username: testUser.username,
      email: testUser.email
    };

    res.json({
      message: "Login successful",
      user: req.session.user
    });

    

}catch(error){
         res.status(500).json({ message: "Login failed", error: error.message });

    }



}

export const handleSignup = async (req,res)=>{


    try{
        //retriving data
        const {username, email, password} = req.body;

        //validate inputs
        if(!username || !email || !password){
            return res.status(400).json({message: "Please fill out all the fields"})
        }

        //check for existing user
        const testUser = await User.findOne({email});
        if(testUser){
            return res.status(409).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })
        
        //creating a session
        req.session.user = {
            id: user._id,
            name: user.username,
            email: user.email
        }

        //send success message
        res.status(201).json({
            message: "signup successfull",
            user: req.session.user

        })
        



    }catch (error){
         res.status(500).json({ message: "Signup failed", error: error.message });

    }

}

export const getMe =(req, res)=>{

    const usr = req.session.user;

    if(!usr){
       return res.status(401).json({ message: "Not authenticated" });
    }
    res.json({user: req.session.user});
}

export const handleLogout= (req,res)=>{
    try{

        //destroy session
        req.session.destroy((error)=>{
            if (error) {
        return res
          .status(500)
          .json({ message: "Logout failed" });
      }
        })


        //destroy cookie
        res.clearCookie("UserCookie");

        res.status(200).json({
            message : "Logout successfull"
        })

    }catch(error){
        return res.status(500).json({
            message: "Logout failed",
            error : error.message
        })

    }
}