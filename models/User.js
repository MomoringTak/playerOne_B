const mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };

// //User

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   id: {
//     type: String
//     // required: true
//   },
//   profile: {
//     name: {
//       firstName: {
//         type: String
//         // required: true
//       },
//       lastName: {
//         type: String
//         // required: true
//       }
//     },
//     image: {
//       url: {
//         type: String
//         // required: true
//       },
//       caption: {
//         type: String
//         // required: true
//       }
//     },
//     email: {
//       type: String
//       // required: true
//     }
//   },
//   password: {
//     type: String
//     // required: true
//   },
//   nickname: {
//     type: String
//   },
//   quote: {
//     type: String
//   },
//   createdAt: {
//     type: Date
//     // required: true
//   },
//   updatedAt: {
//     type: Date
//     // required: true
//   }
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = { User, UserSchema };
