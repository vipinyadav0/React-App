function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onCancel={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onConfirm={confirmHandler}>
        Submit
      </button>
    </div>
  );
}

export default Modal;
