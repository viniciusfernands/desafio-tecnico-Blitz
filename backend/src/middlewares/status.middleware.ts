import { NextFunction, Request, Response } from 'express';

const statusMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { status } = req.body;

  if (status === undefined) return next();

  if (status === 'inProgress') return next();

  if (status === 'finished') return next();

  return res.status(400).json({ message: 'Status precisa ser dos tipos inProgress / finished / pending' });
};

export default statusMiddleware;
