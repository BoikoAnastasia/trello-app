import { useNavigate } from 'react-router-dom';
import './StylesBoardPreview.css'


interface IBoards {
  id: number;
  name: string;
}

export const BoardPreview = ({ item }: { item: IBoards }) => {
  const navigation = useNavigate();  
  const openBoardPage = () => {
    navigation(`/board/${item.id}`)
  }
  return (
    <div className="board-preview" onClick={openBoardPage}>
      <span>{item.name}</span>
    </div>
  );
};

