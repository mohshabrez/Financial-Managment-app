import mongoose from "mongoose";

export const initializeDatabase = async () => {
  try {
    const connectedDb = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connectedDb) {
      console.log("DB Connected");
    } else {
      console.log("Error occured while connecting db");
    }
  } catch (error) {
    throw new Error("Error occured while initializing connection");
  }
};
