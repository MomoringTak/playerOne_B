const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  profile: {
    name: {
      firstName: {
        type: String,
        required: true
      },
      LastName: {
        type: String,
        required: true
      }
    },
    image: {
      url: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: true
      }
    },
    email: {
      type: String,
      required: true
    }
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  quote: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };

/*

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  id: {
    type: String,
    required: true
  },
  profile: {
    name: {
      firstName: {
        type: String,
        required: true
      },
      LastName: {
        type: String,
        required: true
      }
    },
    image: {
      url: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: true
      }
    },
    email: {
      type: String,
      required: true
    }
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  quote: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

*/
