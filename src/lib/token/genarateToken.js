import { SignJWT, jwtVerify } from "jose";

const generateToken = async (user, cookies) => {
  const payload = {
    userid: user._id,
    userEmail: user.userEmail,
  };
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIMER)
    .sign(secret);
  // console.log(token);
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("jwtToken", token, { maxAge: Date.now() - oneDay });
  return token;
};

const verifiToken = async (token) => {
  console.log(token);
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decode = await jwtVerify(token, secret);
  // console.log(decode);

  return decode["payload"];
};
export { generateToken, verifiToken };
