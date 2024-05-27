// import { useState } from "react";
// import "./StylesTask.css";

// interface ITask {
//   id: number;
//   status: boolean;
//   nameTask: string;
// }

// export const Task = ({ listTasks }: { listTasks: ITask[] }) => {
//   const [tasks, setTasks] = useState(listTasks);

//   const changeStatusTask = (id: number) => {
//     setTasks(prevTask => prevTask.map(
//       task => task.id === id ? {...task, status: !task.status} : task));
//     // const taskClick = listTasks.find(task => task.id === id)
//     // taskClick!.status = true;
//   };
  
//   return (
//     <>
//     {tasks.map((task) => (
//         <div
//           onClick={() => changeStatusTask(task.id)}
//           className={task.status ? "task taskSucces" : "task taskNotSucces"}
//           key={task.id}
//         >
//           {task.nameTask}
//         </div>
//       ))}
//       {/* {listTasks.map((task) => (
//         <div
//         onClick={(e) => changeStatusTask(task.id)}
//           className={task.status ? "task taskSucces" : " task taskNotSucces"}
//           key={task.id}
//         >
//           {task.nameTask}
//         </div>
//       ))} */}
//     </>
//   );
// };

import "./StylesTask.css";
import React, { useEffect, useState } from 'react';

interface ITask {
  id: number;
  status: boolean;
  nameTask: string;
}

export const Task = ({ listTasks: initialTasks }: { listTasks: ITask[] }) => {
  // Используем useState для управления состоянием списка задач
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(()=>{
    setTasks(initialTasks)
  }, [initialTasks])

  const changeStatusTask = (id: number) => {
    // Создаем новый массив задач с измененным статусом 
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === id ? { ...task, status: !task.status } : task 
    ));
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          onClick={() => changeStatusTask(task.id)}
          className={task.status ? "task taskSucces" : "task taskNotSucces"}
          key={task.id}
        >
          {task.nameTask}
        </div>
      ))}
    </>
  );
};
