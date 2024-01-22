const jwt = require("jsonwebtoken");

function createToken(payload = {}, expiry = 60 * 60) {
  try {
    return jwt.sign(payload, process.env.KEY, { expiresIn: expiry });
  } catch (e) {
    console.log(e);
  }
  return undefined;
}

function verifyToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.KEY);
  } catch (err) {
    console.log(err);
  }
  return null;
}

module.exports = { createToken, verifyToken };
