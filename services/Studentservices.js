const User = require("../models/Newtable");

var exportFuns = {};

exportFuns.create = async function (createPattern) {
  return User.create(createPattern).then((createRes) => {
      return createRes;
    }).catch((err) => {
      throw err;
    });
};

exportFuns.getdata = async function () {
  return User.find().then((getRes) => {
      return getRes;
    }).catch((err) => {
      throw err;
    });
};

exportFuns.updateOne = async function (id, createchange) {
  return User.updateOne(id, createchange).then((updateRes) => {
      return updateRes;
    }).catch((err) => {
      throw err;
    });
};

exportFuns.deleteOne = async function (deleteid) {
  return User.deleteOne(deleteid).then((deleteRes) => {
      return deleteRes;
    }).catch((err) => {
      throw err;
    });
};

module.exports = exportFuns;
