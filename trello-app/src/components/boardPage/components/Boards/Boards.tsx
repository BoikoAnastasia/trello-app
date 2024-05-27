import { useState } from "react";

interface ITask {
  id: number;
  status: boolean;
  nameTask: string;
}

interface IBoardInfo {
  id: number;
  nameBoard: string;
}

export const Boards = ({ listBoard }: { listBoard: IBoardInfo[] }) => {
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
    <div className="boards">
      {listBoard &&
        listBoard.map((item) => (
          <div key={item.id} className="board">
            <span>{item.nameBoard}</span>
            <hr />
            <>
              <input
                onKeyDown={handleKeyDownTask}
                type="text"
                placeholder="Name task..."
                onChange={(e) => setTaskName(e.target.value)}
              />
            </>
            {/* {item.tasks.length ? (
                  item.tasks.map((task) => (
                      <div key={task.id}>{task.nameTask}</div>
                    ))
                ) : (
                    <>
                  <input
                    onKeyDown={handleKeyDownTask}
                    type="text"
                    onChange={(e) => setTaskName(e.target.value)}
                    />
                </>
              )} */}
          </div>
        ))}
    </div>
  );
};
