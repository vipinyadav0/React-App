import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    // console.log("Clicked")
    // console.log(props.text)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div ClassName="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {/* <Backdrop /> */}
    </div>
  );
}

export default Todo;
