import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const deleteUser = await deleteUserService(req.params.id);
  return res.status(204).json(deleteUser);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};