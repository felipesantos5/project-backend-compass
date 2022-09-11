import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adm:123@backend.zbpcuuc.mongodb.net/backend-compass");

let db = mongoose.connection;

export default db;