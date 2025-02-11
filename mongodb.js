import mongoose from 'mongoose'

const connectdb = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_STRING)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb;