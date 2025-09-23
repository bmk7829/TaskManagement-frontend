import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/Home';
import TaskBoard from './components/TaskBoard';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: []
  });

  const handleAddTask = (newTask) => {
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, { ...newTask, id: Date.now() }]
    }));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home tasks={tasks} />} />
            <Route path="/tasks" element={<TaskBoard tasks={tasks} setTasks={setTasks} />} />
            <Route path="/create-task" element={<AddTaskForm onAddTask={handleAddTask} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 