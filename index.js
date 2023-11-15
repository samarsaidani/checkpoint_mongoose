const connectDb = require("./Mogo_Url")
const Person=require("./ProtoType")

connectDb()

// Person.insertMany([
//     {nom:"samar",age:"27",favoriteFoods:['tom and jerry','Woody Woodpecker']}
// ,{nom:"oumaima",age:"32",favoriteFoods:['Johnny Bravo ','Les Fous du Volan']}])
// Person.find()

// Person.findOne({favoriteFoods:'Johnny Bravo '}).
// then((result)=>{console.log(result)}).
// catch((err)=>console.log(err))

// Person.findById({_id:'6555247a19be9e7f86fbc1dd'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// Person.updateOne({age:27},{favoriteFoods:'Barbie'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// Person.find()
// Person.findByIdAndUpdate({nom:"samar"},{$set:20},{new:true}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})

// Person.findByIdAndDelete({_id:'6555247a19be9e7f86fbc1dd'}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})
// Person.find()

// Person.deleteMany({age:{$eq:22}}).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})
// Person.find({favoriteFoods:'tom and jerry'}).sort({nom:1}.limit(2).select({age:-1}).exec()).
// then((result)=>{console.log(result)}).
// catch((err)=>{console.log(err);})
