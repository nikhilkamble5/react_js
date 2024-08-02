// import mongoose from "mongoose";
// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://0.0.0.0:27017/Products");
//     console.log("Database Connected Successfully");
//   } catch (error) {
//     console.log("Error While Connecting the database");
//   }
// };

// export default connectDb;

// import mongoose from "mongoose";

// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost:27017/Products", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log("Database Connected Successfully");
//   } catch (error) {
//     console.error("Error While Connecting the database:", error);
//   }
// };

// export default connectDb;

//**************************************************** */
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Products", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error While Connecting the database:", error);
  }
};

export default connectDb;
