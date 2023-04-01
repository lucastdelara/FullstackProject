import { Request, Response } from "express";
import { IUserLogin } from "../interface";
import loginService from "../services/sessions/login.service";

const loginController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await loginService(sessionData);
  return res.json({ token });
};

export { loginController };
