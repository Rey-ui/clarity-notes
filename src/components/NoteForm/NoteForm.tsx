import { Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks";
import { addNote } from "../../redux/notes/operations";
import type { RequestNoteType } from "../../types/types";
import { BsPlusLg } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import toast from "react-hot-toast";

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
    dispatch(addNote(finalNote))
      .unwrap()
      .then(() => {
        toast.success("successfully added");
      })
      .catch(() => {
        toast.error("error");
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
        <h2>
          <span>Create Note</span>
          <FaPen />
        </h2>
        <div>
          <div>
            <label>
              <h3>Title</h3>
              <Field
                type="text"
                name="title"
                placeholder="Enter note title..."
              />
            </label>
            <label>
              <h3>Content</h3>
              <Field
                as="textarea"
                type="text"
                name="content"
                placeholder="Write your note here..."
              />
            </label>
            <div>
              <h3>Priority</h3>
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
            </div>
          </div>
          <button type="submit">
            <BsPlusLg />
            Add Note
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default NoteForm;
