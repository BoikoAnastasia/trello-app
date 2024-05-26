import { useState } from "react";
import "../StylesMain.css";
import "./StylesBoardPage.css";

//все поддоски
// interface IBoardsList {
//   id: number;
//   boardInfo: IBoardInfo;
// }

//информация о доске
interface IBoardInfo {
  id: number;
  nameBoard: string;
  tasks: Task[] | [];
}

interface Task {
  id: number;
  status: false;
  nameTask: string;
}

export const BoardPage = () => {
  const [nextId, setNextId] = useState(0);
  const [showList, setShowList] = useState(false);
  const [nameBoard, setNameBoard] = useState("");
  const [taskName, setTaskName] = useState("");
  const [listBoard, setListBoard] = useState<IBoardInfo[]>([]);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 && nameBoard !== "") {
      setNextId(nextId + 1);
      setListBoard([
        ...listBoard,
        {
          id: nextId,
          nameBoard: nameBoard,
          tasks: [],
        },
      ]);
      setNameBoard("");
    }
  };

  const handleKeyDownTask = (e: any) => {
    if (e.keyCode === 13 && taskName !== "") {
    }
  };

  return (
    <>
      <div className="create-board">
        <button className="button-green board-green">Boards meeting</button>
        {showList ? (
          <div className="board">
            <button id="btn-close" onClick={() => setShowList(false)}>
              x
            </button>
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setNameBoard(e.target.value)}
              type="text"
              placeholder="add a list..."
            />
          </div>
        ) : (
          <button className="add-list" onClick={() => setShowList(true)}>
            Add a list...
          </button>
        )}
      </div>
      <div className="boards">
        {listBoard &&
          listBoard.map((item) => (
            <div key={item.id} className="board">
              <span>{item.nameBoard}</span>
              <hr />
              {item.tasks.length ? (
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
              )}
            </div>
          ))}
      </div>
    </>
  );
};
