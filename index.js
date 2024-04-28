const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);


//------------------Delete-----------------------
// User.deleteOne({name: "Bruce"}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.deleteMany({age: 40}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.findByIdAndDelete("65ffb57eb5649108cf945d33").then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.findOneAndDelete({ name: "Tony" })
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

//---------------Find And Update-----------------
// User.findOneAndUpdate({ name: "Bruce" }, { age: 45 }, {new: true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate( "65ffb8657f9fb184265d89e5", { age: 35 }, {new: true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate( "65fe71238546913ccc73574a", { age: 19 }, {new: true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//------------------Insert----------------------
// User.updateMany({ name: {$gt:19} }, { age: 40 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Bruce" }, { age: 59 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//------------------Find------------------------

// User.findById( "65ffb8657f9fb184265d89e7" )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //------------InsertMany-----------
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 20 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 30 },
// ]).then((res) => {
//   console.log(res);
// });
//------------InsertOne-----------

// const user2 = new User({
//   name: "Tapu",
//   email: "Tapu@yahoo.com",
//   age: 20,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
