import React, { useContext } from 'react';
import { TaskContext } from '../Context/Context';
import ItemTask from '../ItemTask/ItemTask';
import './ContainerTasks.css';

function ContainerTasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="container-tasks">
      {tasks.map(task => (
        <ItemTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ContainerTasks;
