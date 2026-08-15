import { Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks";
import { addNote } from "../../redux/notes/operations";
import type { RequestNoteType } from "../../types/types";

interface InitialValuesTypes {
  title: string;
  content: string;
  priority: "high" | "medium" | "low";
}

const RegisterSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(3, "Too Short!")
    .max(2000, "Too Long!")
    .required("Required"),
  priority: Yup.string()
    .oneOf(["low", "high", "medium"], "Chose the priority")
    .required("Chose the priority!"),
});

const initialValues: InitialValuesTypes = {
  title: "",
  content: "",
  priority: "high",
};

const NoteForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (
    values: InitialValuesTypes,
    { resetForm }: FormikHelpers<InitialValuesTypes>,
  ): void => {
    const finalNote: RequestNoteType = {
      ...values,
      done: false,
    };
    dispatch(addNote(finalNote));
    // .unwrap()
    // .then(() => {
    //   toast.success("success signUn");
    // })
    // .catch(() => {
    //   toast.error("error register");
    // });
    console.log(finalNote);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2></h2>
        <Field type="text" name="title" />
        <Field as="textarea" type="text" name="content" />
        <div>
          <label>
            <Field type="radio" name="priority" value="high" />
            High
          </label>
          <label>
            <Field type="radio" name="priority" value="medium" />
            Medium
          </label>
          <label>
            <Field type="radio" name="priority" value="low" />
            Low
          </label>
        </div>

        <button type="submit">add note</button>
      </Form>
    </Formik>
  );
};

export default NoteForm;
