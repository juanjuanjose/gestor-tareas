import React, { useContext } from 'react';
import { TaskContext } from '../Context/Context';
import './InfoTasks.css';

function InfoTasks() {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="info-tasks">
      <p>Usted tiene <span className="pending">{pendingTasks}</span> pendientes y <span className="completed">{completedTasks}</span> terminadas</p>
    </div>
  );
}

export default InfoTasks;
