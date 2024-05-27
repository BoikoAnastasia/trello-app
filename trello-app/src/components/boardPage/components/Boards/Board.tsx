import { useState } from "react";
import { Task } from "../Task/Task";

interface ITask {
  id: number;
  status: boolean;
  nameTask: string;
}

export const Board = ({ board }: { board: any }) => {
  const [nextId, setNextId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [listTasks, setListTasks] = useState<ITask[]>([]);

  const handleKeyDownTask = (e: any) => {
    if (e.keyCode === 13 && taskName !== "") {
      setNextId(nextId + 1);
      setListTasks([
        ...listTasks,
        {
          id: nextId,
          status: false,
          nameTask: taskName,
        },
      ]);
      setTaskName("");
    }
  };

  return (
    <>
      <>
        <input
          onKeyDown={handleKeyDownTask}
          type="text"
          placeholder="Name task..."
          onChange={(e) => setTaskName(e.target.value)}
        />
      </>
      {listTasks && <Task listTasks={listTasks}></Task>}
    </>
  );
};
