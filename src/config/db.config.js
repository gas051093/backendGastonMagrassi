import mongoose from "mongoose";

const connectDb = async(url, dbName)=>{
    try {
        await mongoose.connect(url,{
            dbName
        })
    } catch (err) {
        console.log(`error en la conexion ${err.message}`)
    }
}

export default connectDb