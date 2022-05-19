import { NextFunction, Request, Response } from 'express';

const updateMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { task, status } = req.body;

  if (task === undefined && status === undefined) {
    return res.status(400).json({ message: 'Não é possivel atualizar sem trocar task/status' });
  }

  if (task || task === '') {
    if (!task) return res.status(400).json({ message: 'Campo task precisa ser preenchido' });

    if (typeof task !== 'string') return res.status(400).json({ message: 'O Campo task só pode ser do tipo string' });
  }

  return next();
};

export default updateMiddleware;
