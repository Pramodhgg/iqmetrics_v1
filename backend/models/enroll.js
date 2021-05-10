const { EmailValidator } = require("@angular/forms");
const mongoose = require("mongoose");

const enrollSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
});

module.exports = mongoose.model("Enroll", enrollSchema);
