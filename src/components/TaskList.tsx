import { ClipboardText } from "phosphor-react";

import { Task, TaskType } from "./Task";

import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function TaskList ({ tasks, setTasks }: TaskListProps) {
  const createdTasksCount = tasks.length
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  function onToggleCompleted (taskId: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          task.completed = !task.completed
        }

        return task
      })
    )
  }

  function onDeleteTask (taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  } 

  return (
    <>
      <div className={styles.stats}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{createdTasksCount}</span>
        </div>

        <div className={styles.concluded}>
          <strong>Concluídas</strong>
          <span>
            {createdTasksCount ? completedTasksCount + " de " : ""} 
            {createdTasksCount}
          </span>
        </div>
      </div>
      
      {createdTasksCount ? (
        <ul className={styles.list}>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <Task 
                  task={task} 
                  onToggleCompleted={onToggleCompleted} 
                  onDeleteTask={onDeleteTask} 
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="light" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  )
}