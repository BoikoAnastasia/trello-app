import { useState } from "react";
import "../StylesMain.css";
import "./StylesBoardPage.css";
import { Boards } from "./components/Boards/Boards";

//информация о доске
interface IBoardInfo {
  id: number;
  nameBoard: string;
}

export const BoardPage = () => {
  const [nextId, setNextId] = useState(0);
  const [showList, setShowList] = useState(false);
  const [nameBoard, setNameBoard] = useState("");

  const [listBoard, setListBoard] = useState<IBoardInfo[]>([]);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 && nameBoard !== "") {
      setNextId(nextId + 1);
      setListBoard([
        ...listBoard,
        {
          id: nextId,
          nameBoard: nameBoard,
        },
      ]);
      setNameBoard("");
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
      <Boards listBoard={listBoard}></Boards>
    </>
  );
};
