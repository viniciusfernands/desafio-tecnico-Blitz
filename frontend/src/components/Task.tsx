import React from 'react';
import { ITaskProps } from '../interfaces/task.interface';

function Task(props: ITaskProps) {
  const { task, destroy } = props;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row space-x-4">
        <span> - </span>
        <p>{task.task}</p>
        <p>{task.status}</p>
      </div>
      <p>{`criado em : ${task.createdAt}`}</p>
      <button
        className="w-24 border-2 rounded border-zinc-900"
        type="button"
        onClick={() => destroy(task.id)}
      >
        DELETE
      </button>
    </div>
  );
}

export default Task;
