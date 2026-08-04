import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import type { RegisterType } from "../../types/authTypes";
import { useAppDispatch } from "../../hooks";
import { registerUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Too Short!")
      .max(50, "Too Long!"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values: RegisterType, { resetForm }: any): void => {
    dispatch(registerUser(values))
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
        <Field type="text" name="name" />
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <button type="submit">register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
