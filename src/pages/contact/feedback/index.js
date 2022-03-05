import { Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const Feedback = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={fields => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
    >
      {({ errors, status, touched }) => (
        <FormikForm>
          <Row>
            <Col>
              <Form.Group className="mt-3">
                <Field
                  name="name"
                  type="text"
                  className={
                    "form-control" +
                    (errors.name && touched.name ? " is-invalid" : "")
                  }
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mt-3">
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                  placeholder="Your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mt-3">
            <Field
              name="subject"
              type="text"
              className={
                "form-control" +
                (errors.subject && touched.subject ? " is-invalid" : "")
              }
              placeholder="Subject"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="invalid-feedback"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Field
              as="textarea"
              className={
                "form-control" +
                (errors.message && touched.message ? " is-invalid" : "")
              }
              name="message"
              rows="5"
              placeholder="Message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="invalid-feedback"
            />
          </Form.Group>
          <Form.Group className="text-center mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Feedback;
