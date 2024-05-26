import React, { useState } from "react";
import "../StylesMain.css";
import { BoardPreview } from "../boardPreview/BoardPreview";
import { Header } from "../header/Header";

interface IBoards {
  id: number;
  name: string;
}

export const Main = () => {
  let nextId = 0;
  const [showBoard, setShowBoard] = useState(true);
  const [nameBoard, setNameBoard] = useState("");
  const [arrBoards, setArrBoards] = useState<IBoards[]>([]);

  const createBoard = () => {
    //TODO message
    //TODO target enter add
    if (nameBoard === "") {
      return;
    }

    setShowBoard(false);
    setArrBoards([
      ...arrBoards,
      {
        id: nextId++,
        name: nameBoard,
      },
    ]);
    setNameBoard("");
  };

  return (
    <>
    <Header></Header>
      <div className="create-board">
        {showBoard ? (
          <div className="board-green board-set">
            <span>Creating a board</span>
            <hr />
            <span>What shall we call the board?</span>
            <input
              type="text"
              id="board-name"
              onChange={(e) => setNameBoard(e.target.value)}
            />
            <div className="board-set__buttons">
              <button id="btn-cencel" onClick={() => setShowBoard(false)}>
                Cancel
              </button>
              <button id="btn-create" onClick={createBoard}>
                Create
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowBoard(true)}
            className="button-green board-green"
          >
            Creating a board...
          </button>
        )}
      </div>
      <div className="list-boards">
        {arrBoards &&
          arrBoards.map((item) => (
            <BoardPreview key={item.id}
              item={item}
            ></BoardPreview>
          ))}
      </div>
    </>
  );
};
