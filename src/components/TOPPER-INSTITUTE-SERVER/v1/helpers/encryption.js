const bcrypt = require("bcryptjs");

function encrypt(plaintext) {
  try {
    return bcrypt.hashSync(plaintext, 10);
  } catch (err) {
    console.log(err);
  }
  return null;
}

function compare(plaintext, hash) {
  try {
    return bcrypt.compareSync(plaintext, hash);
  } catch (err) {
    console.log(err);
  }
  return false;
}

module.exports = { encrypt, compare };
