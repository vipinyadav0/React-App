import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className='cardMenu'>
      <h1>My To-Dos</h1>
      <Todo text = 'Learn React'/>
      <Todo text = 'Master React'/>
      <Todo text = 'Explore React'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
