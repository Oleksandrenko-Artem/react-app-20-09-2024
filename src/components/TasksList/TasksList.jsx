import Task from '../Task/Task';
import tasks from './data'
import { useState } from 'react';

function TasksList() {
  const [dataTasks, setDataTasks] = useState(tasks);
  const setDoneTask = (id) => {
    const newTasks = dataTasks.map((task) => {
      if (task.id === id) {
        return ({ ...task, isDone: true });
      }
      return task;
    })
    setDataTasks(newTasks);
  }
  return (
    <>
          {
              dataTasks.map((task) => <Task key={task.id} dataTask={task} setDoneTask={setDoneTask}/>)
          }
    </>
  )
}

export default TasksList