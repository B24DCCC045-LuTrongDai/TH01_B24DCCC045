import './App.css'
import Todolist from './Component/Todolist';
import DoiMauNen from './Component/DoiMauNen';
import LikeDislikePost from './Component/LikeDislikePost';

function App() {
  return (
    <div>
      <h2>Bai 1:</h2>
      <Todolist />
      <h2>Bai 2:</h2>
      <DoiMauNen />
      <h2>Bai 3"</h2>
      <CartApp />
      <h2>Bai 4:</h2>
      <LikeDislikePost text='Hoc Reactjs co kho khong' />
      <LikeDislikePost text='Reactjs rat de hoc' />
      <LikeDislikePost text='Toi thich hoc Reactjs' />
      <h2>Bai 5:</h2>
      <QuizApp />
    </div>
  );
}

export default App;
