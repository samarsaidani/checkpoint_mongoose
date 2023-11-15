const mongoose = require("mongoose")
const URL="mongodb+srv://samarsaidani10:IVzBkMBzz7xNSQSU@cluster0.38fhxzf.mongodb.net";


const connectDb= async()=>{
  try {
      await mongoose.connect(URL); 

      console.log('connect with sucess')
  } catch (error) {
      console.log(error)
      
  }
}

module.exports = connectDb
