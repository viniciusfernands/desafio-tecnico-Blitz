import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/task.interface';

function App() {
  const [taskList, setTaskList] = useState([] as ITask[]);
  const [newTask, setNewTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get<ITask[]>('http://localhost:3333/tasks');
      setTaskList([...data]);
    };

    fetch();
  }, [newTask, deleteTask]);

  const handleClick = async () => {
    await axios.post('http://localhost:3333/tasks', {
      task,
    });
    setTask('');
    return setNewTask(!newTask);
  };

  const handleDeleteTask = async (id: string) => {
    await axios.delete(`http://localhost:3333/tasks/${id}`);

    return setDeleteTask(!deleteTask);
  };

  const handleOnChange = (event: { target: HTMLInputElement }) => {
    setTask(event.target.value);
  };

  return (
    <div>
      <input onChange={handleOnChange} value={task} />
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <TaskList tasksList={taskList} destroy={handleDeleteTask} />
    </div>
  );
}

export default App;
