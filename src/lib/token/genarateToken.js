import jwt from "jsonwebtoken";
const generateToken = (user, cookies) => {
  const data = {
    userid: user._id,
    userEmail: user.userEmail,
  };
  const token = jwt.sign(data, "secret", { expiresIn: "24h" });
  const oneDay = 24 * 60 * 60 * 1000;
  const whenEx = Date.now() - oneDay;
  cookies().set("jwtToken", token, {
    secure: true,
    maxAge: whenEx,
  });
};
export default generateToken;
