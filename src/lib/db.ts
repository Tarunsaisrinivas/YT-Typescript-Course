import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.log("Database Error :", error);
  }
};
