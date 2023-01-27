import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: "User already exists." });
    return;
  }

  const token = jwt.sign(
    // generate a JWT
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    "hello", // my secret, to be moved to .evn file
    { expiresIn: "8h" }
  );

  res.setHeader(
    // set JWT in a cookie
    "Set-Cookie",
    cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true, // can only be accessed by HTTP requests not JS
      maxAge: 8 * 60 * 60, // 8 hours (by milliseconds)
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.json(user);
};
