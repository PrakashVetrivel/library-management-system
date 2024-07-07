import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN number is required'),
    publicationDate: Yup.date().required('Publication date is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN Number</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
