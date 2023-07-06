import { Formik, Form, Field, ErrorMessage } from "formik";

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

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
      <Form autoComplete="off">
        <div>
          <label htmlFor="name">
            Full name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email address
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
        </div>
        <div>
          <label htmlFor="product">Product</label>
          <div>
            <Field name="product" as="select">
              <option value="">Select a product</option>
              {products.map((product, idx)=>(
                <option value={product} key={idx}>{product}</option>
              ))}
            </Field>
            <ErrorMessage name="product"/>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
