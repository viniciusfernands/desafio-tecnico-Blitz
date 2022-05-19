import { NextFunction, Request, Response } from 'express';
import TasksServices from '../services/tasks.services';

const task = TasksServices;

const idMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const isIdValid = await task.getById(id);

  if (!isIdValid) return res.status(404).json({ message: 'Id não encontrado' });

  return next();
};

export default idMiddleware;
