import React from "react";
import { IWork } from "./Interfaces";

type TaskList = {
    task: IWork[]
    onToggle (id:number): void
    onRemove: (id:number)=> void
}

export const ListTask: React.FC<TaskList> = ({task, onRemove, onToggle}) =>{

    if(task.length === 0){
        return <p className="center">Все дела завершены !</p>
    }

    const removeHand = (event: React.MouseEvent,id: number) =>{
        event.preventDefault()
        onRemove(id)
    }

    return(
        <ul>
        {task.map(task => {

            const classes = ['task']
            if(task.completed){
                classes.push('completed')
            }

            return (
            <li className={classes.join(' ')} key={task.id}>
                <label>
                    <input 
                        type='checkbox' 
                        checked={task.completed}
                        onChange = {onToggle.bind(null, task.id)}    
                    />
                    <span>{task.title}</span>
                    <i className ="material-icons red-text" onClick={event => removeHand(event, task.id)}>clear</i> 
                </label>
            </li>
                )    
            })}    
        </ul>
    )
}