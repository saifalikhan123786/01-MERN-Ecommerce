import mongoose from "mongoose";


const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Conected Successfully");

    }
    catch(error){
        console.error(`Error:${error.message}`);

    }
}

export default connectDB;