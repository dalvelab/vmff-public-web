const mongoose = require("mongoose");

const connectDB = async () => {
  let mongoURI;

  if (process.env.NODE_ENV === "production") {
    mongoURI = "mongodb://localhost/vmff";
  } else {
    mongoURI =
      "mongodb+srv://vlad:123@vmff2020-54xjb.mongodb.net/vmff_2020?retryWrites=true&w=majority";
  }
  const conn = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
