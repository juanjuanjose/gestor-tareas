import React, { useContext } from 'react';
import { TaskContext } from '../Context/Context';
import './ItemTask.css';

function ItemTask({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div className={`item-task ${task.completed ? 'completed' : 'pending'}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Marcar Pendiente' : 'Marcar Completada'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default ItemTask;
