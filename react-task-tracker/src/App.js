import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors apointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 3:30pm",
      reminder: false,
    },
  ])

  // Add task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
    
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onSubmit={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : "No Tasks to show"}
    </div>

  );
}

export default App;