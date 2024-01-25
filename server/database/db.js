import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://user:userpassword@ac-xq4f0te-shard-00-00.mombwzj.mongodb.net:27017,ac-xq4f0te-shard-00-01.mombwzj.mongodb.net:27017,ac-xq4f0te-shard-00-02.mombwzj.mongodb.net:27017/?ssl=true&replicaSet=atlas-gdhs4u-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;