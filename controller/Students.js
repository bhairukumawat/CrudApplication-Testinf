const mongoose = require("mongoose");
const { Studentservices } = require("../services/index");

var exportFuns = {};

exportFuns.create_student = (req, res) => {
  try { 

    var createStudent = {
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    //services call of create
    Studentservices.create(createStudent).then((createRes) => {
          res.send(createRes);}).catch((err) => {
          res.send(400, err.message);
      });

  } catch (err) {
    res.send(500, err.message);
  }
};

exportFuns.get_all_student =  (req, res) => {
  try {

    //services call of getdata
    Studentservices.getdata().then((getRes) => {
          res.send(getRes);}).catch((err) => {
          res.send(400, err.message);
      });

  } catch (err) {
    res.send(500, err.message);
  }
};

exportFuns.update_student_byid = (req, res) => {

  var id = { _id: req.params.id };
  var createchange = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  };
  
   //services call of updateOne
  Studentservices.updateOne(id, createchange).then( (result) => {
      console.log(result);
      res.send(200, "UPDATE SCCESS");
    }).catch((err) => {
      res.send(400, err.message);
    });
};
exportFuns.delete_student_byid = (req, res) => {

  var deleteid = { _id: req.params.id };
  
    //services call of deleteOne
  Studentservices.deleteOne(deleteid).then((updateRes) => {
      res.send(200, "DELETE SUCCESS");
    }).catch((err) => {
      res.send(400, err.message);
    });
};

module.exports = exportFuns;
