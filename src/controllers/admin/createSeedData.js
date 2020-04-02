import User from "../../models";

const createSeedData = async (req, res) => {
  const dummyUser = [
    { nickname: "dummy1", age: "21", gender: "male" },
    { nickname: "dummy2", age: "22", gender: "female" },
    { nickname: "dummy3", age: "23", gender: "male" },
    { nickname: "dummy4", age: "24", gender: "female" },
    { nickname: "dummy5", age: "25", gender: "male" },
    { nickname: "dummy6", age: "26", gender: "female" },
    { nickname: "dummy7", age: "27", gender: "male" },
    { nickname: "dummy8", age: "28", gender: "female" },
    { nickname: "dummy9", age: "29", gender: "male" },
    { nickname: "dummy10", age: "31", gender: "male" },
    { nickname: "dummy11", age: "32", gender: "female" },
    { nickname: "dummy12", age: "33", gender: "male" },
    { nickname: "dummy13", age: "34", gender: "female" },
    { nickname: "dummy14", age: "35", gender: "male" },
    { nickname: "dummy15", age: "36", gender: "female" },
    { nickname: "dummy16", age: "37", gender: "male" },
    { nickname: "dummy17", age: "38", gender: "female" },
    { nickname: "dummy18", age: "39", gender: "male" },
    { nickname: "dummy19", age: "40", gender: "female" }
  ];
  try {
    User.create(dummyUser);
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default createSeedData;
