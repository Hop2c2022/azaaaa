const mongoose = require("mongoose")

const connectionString = `mongodb+srv://Azuka:J_A20070511@cluster0.kh3kv4d.mongodb.net/hop2c`
exports.connectDatabse = async () => {
    try{
        await mongoose.connect(connectionString);
        console.log("Successfully Connected");
        return 'Mongoose connected';
    }catch(err){
        console.log(err.message);
        return err.message
    }
}