import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"

import { TaskType } from "./Task"

import styles from "./NewTask.module.css"

interface NewTaskProps {
  tasks: TaskType[],
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function NewTask({tasks, setTasks}: NewTaskProps) {
  const [newTaskContent, setNewTaskContent] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {
      id: tasks.length + 1,
      content: newTaskContent,
      completed: false
    }])

    setNewTaskContent("")
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTaskContent(event.target.value)
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskContent}
        onChange={handleNewTaskContentChange}
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={24} />
      </button>
    </form>
  )
}