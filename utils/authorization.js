/** @format */

import jwt from "jsonwebtoken";

export const authorizationHandler = (req, res, next) => {
  try {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Not Authorized");

    const payload = jwt.verify(token, JWT_SECRET_KEY);
    // console.log(payload);
    req.email = payload.email;
    req.userId = payload.userId;

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};
