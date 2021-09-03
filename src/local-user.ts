import { Request, Response, NextFunction } from "express";
import { addHeadersToResponse } from "./server-helpers";
import sequelize from './util/database'
import User from './models/users'

//CRUD CONTROLLERS

//CREATE-ONE
export async function createOne(req: Request, res: Response){
  console.log('createOne: [POST] /users/');
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    try {
      const user = await User.create(USER_MODEL);
      console.log('OK createOne USER ', user);
      return res.status(201).json(user);
    } catch (error) {
      console.log('ERROR in createOne USER ', error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log('Bad Request ', error);
    return res.status(400).json(error);
  }
}

//GET-ALL
export async function getAll(req: Request, res: Response){
  console.log('getAll: [GET] /users/');
  try {
    const ALL = await User.findAll();
    console.log(
      'OK getAll USERS: ', ALL.map((el:any) => el.dataValues),
    );
    return res.status(200).json(ALL);
  } catch (error) {
    console.log('ERROR in Get All USERS ', error);
    return res.status(500).json(error);
  }
}

//GET-ONE
export async function getOne(req: Request, res: Response){
  console.log('getOne: [GET] /users/:id');
  try {
    const u = await User.findByPk(req.params.id);
    console.log('OK getOne USERS: ', u.dataValues);
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in Get One USERS ', error);
    return res.status(500).json(error);
  }
}

//UPDATE-ONE
export async function updateOne(req: Request, res: Response){
  console.log('updateOne: [GET] /users/:id');
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }

    try {
      const u = await User.update(USER_MODEL, { where: { id: req.params.id } })
      console.log('OK updateOne USER: ', u)
      return res.status(200).json(u)
    } catch (error) {
      console.log('ERROR in updateOne ' + 'USER:', error)
      return res.status(500).json(error)
    }
  } catch (error) {
    return res.status(400).json('Bad Request')
  }
}

//DELETE-ONE
export async function deleteOne(req: Request, res: Response){
  console.log('deleteOne: [GET] /users/:id');
  try {
    const u = await User.destroy({ where: { id: req.params.id } });
    console.log('OK deleteOne USERS: ');
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in Delete One USERS ', error);
    return res.status(500).json(error);
  }
}