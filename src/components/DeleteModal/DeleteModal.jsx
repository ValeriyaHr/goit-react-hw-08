import css from "./DeleteModal.module.css";

const DeleteModal = ({ onClose, onDelete }) => {
  const deleteContact = () => {
    onDelete(id);
    onClose();
  };

  return (
    <div className={css.overlay}>
      <div className={css.onDeleteModal}>
        <h2>Are you sure you want to delete this item?</h2>
        <ul className={css.buttonList}>
          <li>
            <button onClick={onDelete}>Yes</button>
          </li>
          <li>
            <button onClick={onClose}>No</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeleteModal;