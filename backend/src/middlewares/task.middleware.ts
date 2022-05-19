import { NextFunction, Request, Response } from 'express';

const taskMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { task } = req.body;

  if (task === undefined) return res.status(400).json({ message: 'Campo task precisa ser preenchido' });

  if (!task) return res.status(400).json({ message: 'Campo task precisa ser preenchido' });

  if (typeof task !== 'string') return res.status(400).json({ message: 'O Campo task só pode ser do tipo string' });

  return next();
};

export default taskMiddleware;
