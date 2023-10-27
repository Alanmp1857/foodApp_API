const mongoose = require('mongoose');

// Define a Mongoose schema
const Schema = mongoose.Schema;

const dblink = "mongodb://Punisher007:zRFfgrFtmosycP9D@ac-7bjdvak-shard-00-00.du8egil.mongodb.net:27017,ac-7bjdvak-shard-00-01.du8egil.mongodb.net:27017,ac-7bjdvak-shard-00-02.du8egil.mongodb.net:27017/?ssl=true&replicaSet=atlas-yb6gbv-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(dblink).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err, "Error");
})

// Create a new schema for a "User" collection
const dataSchema = new Schema({
    id: Number,
    data: Object,
});

// Create a Mongoose model based on the schema
const DataModel = mongoose.model('data', dataSchema);

// Export the User model
module.exports = DataModel;
