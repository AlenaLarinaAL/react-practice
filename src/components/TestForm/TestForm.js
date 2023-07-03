import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
  title: "",
  review: "",
  rating: "",
  date: new Date(),
  recommend: false,
  product: "",
};

export const InfoForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
        </div>
        <div>
          <label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
        </div>
        <div>
          <label>
            <select name="" id=""></select>
          </label>
        </div>
      </Form>
    </Formik>
  );
};
