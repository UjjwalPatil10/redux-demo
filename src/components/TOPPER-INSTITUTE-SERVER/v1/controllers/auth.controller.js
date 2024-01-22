const UserModel = require("../models/user.model");

const { compare } = require("../helpers/encryption");
const { createToken, verifyToken } = require("../helpers/token");
const { pickUser } = require("./user.controller");
const sendEmail = require("../helpers/email");

class AuthCtrl {
  static userLogin(req, res) {
    const { email, password } = req.body;
    UserModel.findOne({ status: 1, email: email })
      .then((result) => {
        if (!result) {
          res.status(404).send({
            error: null,
            message: "Invalid email or user is disabled",
          });
        } else {
          if (compare(password, result?.password)) {
            //login success
            //create the token
            const token = createToken({
              id: result?._id,
              role: result?.role,
              email: result?.email,
            });

            //add the token in the response header
            res.set("x-token", token);
            res
              .status(200)
              .send({ message: "Login Successful", data: pickUser(result) });
          } else {
            res.status(404).send({
              error: null,
              message: "Invalid Password",
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({
          error: err,
          message: "Could not login",
        });
      });
  }
  //User Login

  static validateToken(req, res) {
    // const token = req.headers.authrization;
    const { token } = req.body;
    if (!token)
      res
        .status(403)
        .send({ error: null, message: "Login first to access this resource" });
    else {
      const payload = verifyToken(token);
      if (!payload) {
        res.status(403).send({
          error: null,
          message: "Login first to access this resource",
        });
      } else {
        UserModel.findOne({ _id: payload?.id })
          .then((result) => {
            res
              .status(200)
              .send({ data: pickUser(result), message: "Token is valid" });
          })
          .catch((err) => {
            res.status(404).send({ error: err, message: "User not available" });
          });
      }
    }
  } //Validate Token

  static passwordResetLink(req, res) {
    const { email } = req.body;

    console.log("Request:", req.headers?.origin);
    console.log("Email:", email);

    if (!email)
      return res.status(404).send({ error: null, message: "Invalid email" });

    // console.log("Request: ", req);

    UserModel.findOne({ email: email, status: 1 })
      .then((result) => {
        if (result) {
          //create the password reset link
          //link=http://domain/route/token
          //domain=localhost:3000
          //route=password-reset
          const token = createToken({
            email: email,
            id: result._id,
            role: result.role,
          });
          const link = `${req?.headers?.origin}/password-change/${token}`;
          const textBody = `To change the password copy the link and paste in the address bar of the browser.${link}`;
          const htmlBody = `Click <a href='${link}'>Here</a> to change the password`;

          sendEmail(
            email,
            "trupti90patil@gmail.com",
            "Password reset link",
            textBody,
            htmlBody,
            (err, info) => {
              if (err) {
                console.log(err);
                res.status(404).send({
                  error: err,
                  message: "Invalid email or user is disabled",
                });
              } else {
                console.log(info);
                res.status(200).send({
                  data: link,
                  message: "Password reset link sent",
                });
              }
            }
          );
          res.status(200).send({ data: link, message: "reset link" });
        } else {
          res.status(404).send({
            error: null,
            message: "Invalid email or user is disabled",
          });
        }
      })
      .catch((err) => {
        res
          .status(404)
          .send({ error: err, message: "Could not reset the password" });
      });
  } //Password Reset Link
}

module.exports = AuthCtrl;
