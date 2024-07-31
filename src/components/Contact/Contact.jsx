import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../../redux/contacts/operations";
import DeleteModal from "../../DeleteModal/DeleteModal";

const Contact = ({ id, name, phone }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteCurrentContact = () => {
    dispatch(deleteContact(id));
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className={css.contactElement}>
      <ul className={css.dataList}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>{phone}</li>
      </ul>
      <button className={css.deleteAction} onClick={() => setModalIsOpen(true)}>
        Delete
      </button>
      {modalIsOpen && (
        <DeleteModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          onDelete={deleteCurrentContact}
        />
      )}
    </li>
  );
};


export default Contact;