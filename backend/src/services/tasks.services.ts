import { PrismaClient } from '@prisma/client';
import { INewTask } from '../interfaces/tasks.interfaces';
import prisma from '../server';

class TasksServices {
  constructor(private server: PrismaClient = prisma) {}

  public create = async (newTask: INewTask) => {
    try {
      const created = await this.server.tasks.create({ data: { ...newTask } });
      return created;
    } catch (error) {
      return false;
    }
  };

  public getAll = async () => {
    try {
      const tasks = await this.server.tasks.findMany();
      return tasks;
    } catch (error) {
      return false;
    }
  };

  public getById = async (id: string) => {
    try {
      const task = await this.server.tasks.findUnique({ where: { id: Number(id) } });
      return task;
    } catch (error) {
      return false;
    }
  };
}

const services = new TasksServices();
export default services;
