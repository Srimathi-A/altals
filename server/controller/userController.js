const User=require('../model/userModel')

const create=async(req,res)=>{
    try{
        const userData=new User(req.data)

        if(!userData){
            return res.status(404).json({message:"User data not found"});
        }

        await userData.save();
        res.status(200).json({msg:"User created succesfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getAll=async(req,res)=>{
    try{
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({message:"User data not found"})
        }
        res.status(200).json(userData)
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const getOne=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById();
        if(!userExits){
            return res.status(401).json({message:"user not found"})
        }
        res.status(200).json({userExist})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById();
        if(!userExits){
            return res.status(401).json({message:"user not found"})
        }
        const updateData=await User.findByIdAndupdate(id,req,body,{new:true})
        res.status(200).json({msg:"User updated successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findById();
        if(!userExits){
            return res.status(401).json({message:"user not found"})
        }
        await User.findBYIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

module.export={
    create:create,
    getAll:getAll,
    getOne:getOne,
    update:update,
    deleteUser:deleteUser
}

