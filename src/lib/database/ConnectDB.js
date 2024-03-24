import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URI
      // eLk489RYeyiaXQx1 eco-bazarnila
    )
    .then(() => console.log(" database Connected!"));
};
export default dbConnect;
