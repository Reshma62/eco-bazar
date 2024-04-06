import jwt from "jsonwebtoken";
const generateToken = (user, cookies) => {
  const payload = {
    userid: user._id,
    userEmail: user.userEmail,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  cookies().set("token", token, {
    httpOnly: true,
    maxAge: 86400 * 7, // 7 days
  });
  return token;
};

const verifiToken = async (cookies) => {
  try {
    const token = cookies().get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decodedToken);

    return decodedToken.userid;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { generateToken, verifiToken };
