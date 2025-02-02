"use client"
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [tasks, setTasks] = useState([]); // State to store tasks

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Delete task by index
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task && desc) {
      setTasks([...tasks, { task, desc }]); // Add new task to the list
      settask("");
      setdesc("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8">ToDo List</h1>

        <form onSubmit={submitHandler} className="bg-white p-6 rounded shadow-md w-96">
          <input
            type="text"
            placeholder="Enter your task"
            className="text-lg border-2 border-gray-300 bg-purple-100 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter your Description"
            className="text-lg border-2 border-gray-300 bg-purple-100 px-4 py-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-blue-600 text-white px-4 py-2 text-lg font-bold rounded w-full hover:bg-blue-700 transition duration-200">
            Add
          </button>
        </form>

        <ul className="mt-6 w-96">
          {tasks.map((t, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
              <span className="text-lg">
                <strong>{t.task}</strong>: {t.desc}
              </span>
              <button 
                onClick={() => deleteTask(index)} 
                className="bg-red-600 text-white px-4 py-1 text-lg rounded hover:bg-red-700 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
