import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "To short").required("Required"),
});

const LoginForm = () => {
  const emailInputId = useId();
  const passwordInputId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;