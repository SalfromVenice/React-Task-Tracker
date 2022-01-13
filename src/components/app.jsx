import React, { useState } from "react";

import Header from "./header";
import Tasks from "./tasks";
import AddTask from "./add_task";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    {
      id: 1,
      text: "Learn React",
      day: "Jan 13th at 3:50 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Learn Redux",
      day: "Jan 14th at 2:30 pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Don't forget what learnt so far",
      day: "Jan 15th at 9:30 am",
      reminder: false,
    },
  );

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...task, newTask]);
  };

  // del task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => (task.id === id ? ({ ...task, reminder: !task.reminder }) : task)));
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No tasks to display"
      )}
    </div>
  );
};

export default App;
