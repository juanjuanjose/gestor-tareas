import React from 'react';
import './FilterTasks.css';

function FilterTasks() {
  
  return (
    <div className="filter-tasks">
      <label>Filtrar por:</label>
      <select>
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
}

export default FilterTasks;
