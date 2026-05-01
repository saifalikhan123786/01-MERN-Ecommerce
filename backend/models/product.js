import mongoose, { model } from "mongoose";


const productSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:string
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:string,
    },
    stock:{
        type:number,
        default:0,
    },
    image:{
        type:string,
    },
},{
    timestamps:true,
});

export default mongoose.model( 'Product',productSchema);