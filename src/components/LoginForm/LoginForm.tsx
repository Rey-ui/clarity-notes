import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { LoginType } from "../../types/authTypes";
import { useAppDispatch } from "../../hooks";
import { loginUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { RxEnter } from "react-icons/rx";
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
        toast.success("success signIn");
      })
      .catch(() => {
        toast.error("error login");
      });

    resetForm();
  };
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label>
          <h4>Email</h4>
          <div>
            <FiMail />
            <Field type="email" name="email" placeholder="example@email.com" />
            <ErrorMessage name="email" component="span" />
          </div>
        </label>
        <label>
          <h4>Password</h4>
          <div>
            <TbLockPassword />
            <Field
              type={isVisiblePassword ? "text" : "password"}
              name="password"
              placeholder="At least 6 characters"
            />
            <button
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <HiEye /> : <HiEyeOff />}
            </button>
            <ErrorMessage name="password" component="span" />
          </div>
        </label>
        <button type="submit">
          <RxEnter />
          <span>SignIn</span>
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
