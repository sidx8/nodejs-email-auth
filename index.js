require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/auth");

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

mongoose
  .connect(
    "mongodb+srv://vidlyuser:1234@sandbox.hvkqpol.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    console.log(process.env.EMAIL_SERVICE_USER);
    console.log(process.env.EMAIL_SERVICE_PASS);
    console.log(process.env.SECRET_KEY);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
