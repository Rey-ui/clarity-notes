import { Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { LoginType } from "../../types/authTypes";
import { useAppDispatch } from "../../hooks";
import { loginUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Too Short!")
    .max(50, "Too Long!"),
});
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (
    values: LoginType,
    { resetForm }: FormikHelpers<LoginType>,
  ): void => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        toast.success("success signUn");
      })
      .catch(() => {
        toast.error("error register");
      });

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <button type="submit">SignIn</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
