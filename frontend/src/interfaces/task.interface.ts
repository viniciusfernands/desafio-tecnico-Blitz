export interface ITask {
  id: string;
  status?: string;
  task: string;
  createdAt: string;
}

export interface ITaskListProps {
  tasksList: ITask[];
  destroy(id: string): Promise<void>;
}

export interface ITaskProps {
  task: ITask;
  destroy(id: string): Promise<void>;
}
