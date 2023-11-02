import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType } from "./components/Task";
import { TaskList } from "./components/TaskList";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}