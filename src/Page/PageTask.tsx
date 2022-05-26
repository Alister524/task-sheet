import React, {useState, useEffect} from "react";
import { FormWork } from "../FormWork";
import { ListTask } from "../ListTask";
import { IWork } from '../Interfaces';

declare var confirm: (question: string) => boolean

export const PageTask: React.FC = () => {

    const [tasks, setTasks] = useState<IWork[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('letter') || '[]') as IWork[]
      setTasks(saved)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('letter', JSON.stringify(tasks))
      }, [tasks])
  
    const addTasks = (title: string) =>{
      const newTask: IWork = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTasks(prev => [newTask, ...prev])
    }
  
    const onToggleTask = (id:number) => {
      setTasks(prev => 
          prev.map(task => {
        if(task.id === id){
          task.completed = true
        }
        return task
      }))
    }
  
    const removeToggle = (id: number) => {
      const applyRemove = confirm('Вы уверены, что необходимо удалить задачу ?')
      if(applyRemove){
        setTasks(prev => prev.filter(task => task.id !== id))
      }
    }

    return(
        <React.Fragment>
            <FormWork onAdd = {addTasks}/>

            <ListTask 
            task = {tasks} 
            onToggle = {onToggleTask}
            onRemove = {removeToggle}
            />
        </React.Fragment>
    )
}