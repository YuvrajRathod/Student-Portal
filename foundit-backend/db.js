const mongoose=require('mongoose');

require('dotenv').config();

const mongoURI = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;

const connectToMongo=()=>{
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true},      
).then((link) => {
  console.log("Connected to MongoDB Successfully")
})
.catch(() => {
  console.log("Database Not Connected.");
})
}

module.exports=connectToMongo;