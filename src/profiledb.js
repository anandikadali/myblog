const mongoose = require("mongoose");
async function main() {
  
  await mongoose.connect(
    "mongodb+srv://anandikadali5563:KksLLZ68paI0Y36q@cluster0.fk8ns.mongodb.net/",
    { useNewUrlParser: true }
    
  );
 
  console.log("profile connected");
}
main();
const profileSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password:String,
  type:String,
  dp: String,
  bio: String,
  weblink:String,
  facebook:String,
  whatsapp:String,
  twitter:String,
  instagram:String,
  phoneno:String
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
