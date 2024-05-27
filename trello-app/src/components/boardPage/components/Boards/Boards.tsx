import { Board } from "./Board";

interface IBoardInfo {
  id: number;
  nameBoard: string;
}

export const Boards = ({ listBoard }: { listBoard: IBoardInfo[] }) => {
  return (
    <div className="boards">
      {listBoard &&
        listBoard.map((item) => (
          <div key={item.id} className="board">
            <span>{item.nameBoard}</span>
            <hr />

            <Board board={item}></Board>
          </div>
        ))}
    </div>
  );
};
