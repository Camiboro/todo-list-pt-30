import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeTask, setActiveTask] = useState(null);
  function App() {
  
	const pendingTasksCount = tasks.length;
  
	return (
	  <div style={containerStyle}>
		<input
		  style={inputStyle}
		  value={inputValue}
		  onChange={(e) => setInputValue(e.target.value)}
		  onKeyDown={handleAddTask}
		  placeholder="Añade una tarea..."
		/>
		<TodoList
		  tasks={tasks}
		  activeTask={activeTask}
		  setActiveTask={setActiveTask}
		  handleDeleteTask={handleDeleteTask}
		/>
		<div style={{marginTop: '20px', textAlign: 'center'}}>
		  {pendingTasksCount} tareas pendientes
		</div>
	  </div>
	);
  }
  
  
  

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setActiveTask(null);
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTask}
        placeholder="Añade una tarea..."
      />
      <TodoList
        tasks={tasks}
        activeTask={activeTask}
        setActiveTask={setActiveTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function TodoList({ tasks, activeTask, setActiveTask, handleDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No hay tareas, añadir tareas</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          isActive={activeTask === index}
          onActivate={() => setActiveTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </ul>
  );
}

function TodoItem({ task, isActive, onActivate, onDelete }) {
  const itemStyle = {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '5px',
    backgroundColor: isActive ? '#f6f6f6' : '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  };

  const deleteButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <li style={itemStyle} onClick={onActivate}>
      {task}
      {isActive && (
        <button style={deleteButtonStyle} onClick={onDelete}>
          ❌
        </button>
      )}
    </li>
  );
}

export default App;