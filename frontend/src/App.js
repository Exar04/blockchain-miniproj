import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check, Trash } from "lucide-react";

function App() {
  return (
    <div className="App h-screen w-screen">
      <div className=" flex justify-center items-center text-5xl text-slate-400 p-4">Decentrailized TODO App</div>
      <div className=" flex justify-center items-center w-full h-full">
        <TodoApp />
      </div>
    </div>
  )
}

export default App;


function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow">
            <button
              onClick={() => toggleTaskCompletion(index)}
              className={`p-2 rounded-full ${task.completed ? "bg-green-500" : "bg-gray-300"}`}
            >
              ✓
            </button>
            <span className={`flex-grow ml-3 ${task.completed ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="ml-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


