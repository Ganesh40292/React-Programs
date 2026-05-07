1)
import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const [form, setForm] = useState({
    name: "",
    date: "",
    desc: ""
  });

  const addTask = (e) => {
    e.preventDefault();

    if (form.name && form.date) {
      setTasks([
        ...tasks,
        {
          ...form,
          done: false
        }
      ]);

      setForm({
        name: "",
        date: "",
        desc: ""
      });
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.done;
    if (filter === "notdone") return !task.done;

    return true;
  });

  return (
    <div className="app">
      <h1>Reminder App</h1>

      <form onSubmit={addTask}>
        {["name", "date", "desc"].map((key) => (
          <input
            key={key}
            type={key === "date" ? "date" : "text"}
            placeholder={key}
            value={form[key]}
            onChange={(e) =>
              setForm({
                ...form,
                [key]: e.target.value
              })
            }
          />
        ))}

        <button type="submit">Add</button>
      </form>

      <div className="filters">
        {["all", "done", "notdone"].map((value) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
          >
            {value}
          </button>
        ))}
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className={task.done ? "done" : ""}
          >
            <b>{task.name}</b> - {task.date}

            {task.desc && ` | ${task.desc}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

2)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

3)

.app {
  max-width: 400px;
  margin: auto;
  font-family: sans-serif;
}

form,
.filters {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;
}

input,
button {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: gray;
}

4)

.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;
}

.counter:hover {
  border-color: var(--accent-border);
}

.counter:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.hero {
  position: relative;
}

.hero .base,
.hero .framework,
.hero .vite {
  inset-inline: 0;
  margin: 0 auto;
}

.hero .base {
  width: 170px;
  position: relative;
  z-index: 0;
}

.hero .framework,
.hero .vite {
  position: absolute;
}

.hero .framework {
  z-index: 1;
  top: 34px;
  height: 28px;
  transform: perspective(2000px)
    rotateZ(300deg)
    rotateX(44deg)
    rotateY(39deg)
    scale(1.4);
}

.hero .vite {
  z-index: 0;
  top: 107px;
  height: 26px;
  width: auto;
  transform: perspective(2000px)
    rotateZ(300deg)
    rotateX(40deg)
    rotateY(39deg)
    scale(0.8);
}
