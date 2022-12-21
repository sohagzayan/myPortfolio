const app = require("./index");
const dotenv = require("dotenv");
const connectDatabase = require("./config/databaseConnection");

// Config
dotenv.config({ path: "backend/config/config.env" });

//  connect Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is open on http://localhost:${process.env.PORT}`);
});
