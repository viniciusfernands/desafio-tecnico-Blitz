import { Request, Response } from 'express';
import TasksServices from '../services/tasks.services';

const ERROR_MESSAGE = { message: 'Algo deu errado' };

class TasksControllers {
  constructor(private service = TasksServices) {}

  public create = async (req: Request, res: Response) => {
    try {
      const { task, status } = req.body;

      const created = await this.service.create({ task, status });

      if (!created) return res.status(400).json({ message: 'Não foi possivel criar nova tarefa' });

      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json(ERROR_MESSAGE);
    }
  };

  public getAll = async (_req: Request, res: Response) => {
    try {
      const tasks = await this.service.getAll();

      if (!tasks) return res.status(400).json({ message: 'Não foi possivel listar as tarefas' });

      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json(ERROR_MESSAGE);
    }
  };
}

const controllers = new TasksControllers();
export default controllers;
