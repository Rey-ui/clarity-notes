import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks";
import { registerUser } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { LuUserPlus } from "react-icons/lu";

interface RegisterValuesType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  email: Yup.string().email("Must be a valid email!").required("Required!"),
  password: Yup.string()
    .required("Required!")
    .min(6, "Too Short!")
    .max(50, "Too Long!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match!")
    .required("Required!"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
  const onSubmit = (
    values: RegisterValuesType,
    { resetForm }: FormikHelpers<RegisterValuesType>,
  ): void => {
    const { confirmPassword, ...userData } = values;
    dispatch(registerUser(userData))
      .unwrap()
      .then(() => {
        toast.success("success signUp");
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
        <label>
          <h4>Name</h4>
          <div>
            <FiUser />
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="span" />
          </div>
        </label>
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
        <label>
          <h4>Confirm Password</h4>
          <div>
            <TbLockPassword />
            <Field
              type={isVisiblePassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Repeat your password"
            />
            <button
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <HiEye /> : <HiEyeOff />}
            </button>
            <ErrorMessage name="confirmPassword" component="span" />
          </div>
        </label>
        <button type="submit">
          <LuUserPlus /> Create Account
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
