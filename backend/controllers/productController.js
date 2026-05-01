import product from "../models/product";

// Craete a New Product

 export const createProduct= async (req,res)=>{
    try{
        const product= await product.create(req.body)
        res.json({
            message:'product created successfully',
            product,
        })

    }
    catch(err){
     res.status(500).json({message:"Server Error",err});
    }
 };

 // Get All Products 

  export const getProducts= async (req,res)=>{
    try{
        const products= await product.find().sort({createdAt:-1});
        res.json(products);
    }
    catch(err){
     res.status(500).json({message:"Server Error",err});
    }
 };

 // Update a product 

 export const updateProducts= async (req,res)=>{
    try{
        const update= await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json({
            message:'product updated successfully',
            updated,
        });
    }
    catch(err){
     res.status(500).json({message:"Server Error",err});
    }
 };

 // Delete a product 

 export const deleteProducts= async (req,res)=>{
    try{
        const update= await product.findByIdAndDelete(
            req.params.id,
        );
        res.json({
            message:'product deletedsuccessfully',
        });
    }
    catch(err){
     res.status(500).json({message:"Server Error",err});
    }
 };





  
