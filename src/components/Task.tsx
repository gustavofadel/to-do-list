import { Check, Trash } from "phosphor-react"

import styles from "./Task.module.css"

export interface TaskType {
  id: number
  content: string
  completed: boolean
}

interface TaskProps {
  task: TaskType
  onToggleCompleted: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

export function Task ({ task, onToggleCompleted, onDeleteTask }: TaskProps) {
  function handleToggleCompleted (taskId: number) {
    onToggleCompleted(taskId)
  }

  function handleDeleteTask (taskId: number) {
    onDeleteTask(taskId)
  }

  return (
    <div className={styles.task}>
      <button 
        className={task.completed ? styles.checkButtonCompleted : styles.checkButtonUncompleted}
        onClick={() => handleToggleCompleted(task.id)}
      >
        <Check weight="bold" />
      </button>

      <p 
        className={task.completed ? styles.contentCompleted : styles.content}
      >
        {task.content}
      </p>

      <button 
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}