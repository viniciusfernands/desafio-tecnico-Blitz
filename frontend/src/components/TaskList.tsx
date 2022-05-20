import React from 'react';
import { ITaskListProps } from '../interfaces/task.interface';
import Task from './Task';

function TaskList(props: ITaskListProps) {
  const { tasksList, destroy } = props;

  return (
    <div>
      {tasksList.map((task) => (
        <Task key={task.id} task={task} destroy={destroy} />
      ))}
    </div>
  );
}

export default TaskList;
