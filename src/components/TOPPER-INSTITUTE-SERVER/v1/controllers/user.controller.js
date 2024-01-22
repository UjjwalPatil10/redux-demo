const { resourceLimits } = require("worker_threads");
const UserModel = require("../models/user.model");
const { encrypt, compare } = require("../helpers/encryption");
const _ = require("lodash");

const {
  USER_CREATED_SUCCESS,
  USER_CREATED_ERROR,
  USER_FETCH_ALL_SUCCESS,
  USER_FETCH_ALL_ERROR,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_DELETE_SUCCESS,
  USER_DELETE_ERROR,
} = require("../helpers/constants");

class UserCtrl {
  static pickUser(user) {
    return _.pick(user, [
      "_id",
      "userId",
      "name",
      "mobile",
      "email",
      "gender",
      "status",
      "role",
      "createAt",
      "createdBy",
      "dob",
    ]);
  }

  static createUser(req, res) {
    const user = req.body;

    if (user?.password) {
      //encrypt the password
      user.password = encrypt(user?.password);
    }

    const userDoc = new UserModel(user);

    userDoc
      .save()
      .then((result) => {
        res.status(201).send({ data: result, message: USER_CREATED_SUCCESS });
      })
      .catch((err) => {
        res.status(500).send({ message: USER_CREATED_ERROR, error: err });
      });
  } //createUser

  static updateUser(req, res) {
    const user = req.body;
    const { id } = req.params;

    if (user?.password) {
      //encrypt the password
      user.passwordb = encrypt(user?.password);
    }

    UserModel.findOneAndUpdate({ _id: id }, user, { new: true })
      .then((result) => {
        res.status(200).send({
          data: UserCtrl.pickUser(result),
          message: USER_UPDATE_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ error: err, message: USER_UPDATE_ERROR });
      });
  }

  //updateUser

  static deleteUser(req, res) {
    const { id } = req.params;

    UserModel.findOneAndUpdate({ _id: id }, { status: 2 })
      .then((result) => {
        res.status(200).send({
          data: UserCtrl.pickUser(result),
          message: USER_DELETE_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ error: err, message: USER_DELETE_ERROR });
      });
  }

  //deleteUser

  static getOneUser(req, res) {
    const { id } = req.params;
    UserModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({
          data: UserCtrl.pickUser(result),
          message: USER_FETCH_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ error: err, message: USER_FETCH_ERROR });
      });
  }

  //getOneUser

  static getAllUsers(req, res) {
    UserModel.find({})
      .then((result) => {
        res.status(200).send({
          data: _.map(result, (u) => UserCtrl.pickUser(u)),
          message: USER_FETCH_ALL_SUCCESS,
        });
      })
      .catch((err) => {
        res.status(404).send({ error: err, message: USER_FETCH_ALL_ERROR });
      });
  }
}

module.exports = UserCtrl;
