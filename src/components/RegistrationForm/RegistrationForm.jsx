import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(30).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "To short").required("Required"),
});

const RegistrationForm = () => {
  const nameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <ul className={css.formList}>
          <li>
            <label htmlFor={nameInputId}>Name</label>
            <Field type="text" name="name" id={nameInputId} />
            <ErrorMessage name="name" component="span" />
          </li>
          <li>
            <label htmlFor={emailInputId}>Email</label>
            <Field type="email" name="email" id={emailInputId} />
            <ErrorMessage name="email" component="span" />
          </li>
          <li>
            <label htmlFor={passwordInputId}>Password</label>
            <Field type="password" name="password" id={passwordInputId} />
            <ErrorMessage name="password" component="span" />
          </li>
        </ul>
        <button className={css.formButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;