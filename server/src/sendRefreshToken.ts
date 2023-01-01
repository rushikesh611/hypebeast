import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    // domain: ".example.com",  for production
    // path: "/refresh_token",
  });
};
