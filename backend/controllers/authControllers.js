import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const SignupUser= async (req,res)=>{
    try{
        const{name,email,password}=req.body;

        // Check User is already exit
         const userExits= await User.findOne({email});

        if(userExits){
            return res.status(400).json({message:"User Already Exits"})
        }

        // Hash Password

        const hashPassword= await bcrypt.hash(password,10);

        // Create User
         await User.create({
            name,
            email,
            password:hashPassword
         });
          res.json({message:"User register successfully"});
    }
    catch(error){
      res.status(500).json({message:"Server Error"})
    }
}