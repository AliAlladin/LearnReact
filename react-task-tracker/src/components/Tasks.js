import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {
    return (
        <>
          {
              tasks.map((task) => (
                  <Task onDelete = {onDelete} key={task.id} task={task}></Task>
              )) 
          }  
        </>
    )
}

export default Tasks
