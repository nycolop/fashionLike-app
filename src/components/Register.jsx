import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Register () {
  return (
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          verifyPassword: '',
          birthDate: ''
        }}
        validate={values => {
          const errors = {}

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {
            ({ isSubmitting }) => (
              <Form>
                  <Field type='text' name='name' />
                  <ErrorMessage name='name' component='div' />

                  <Field type='text' name='surname' />
                  <ErrorMessage name='surname' component='div' />

                  <Field type='email' name='email' />
                  <ErrorMessage name='email' component='div' />

                  <Field type='password' name='password' />
                  <ErrorMessage name='password' component='div' />

                  <Field type='password' name='verifyPassword' />
                  <ErrorMessage name='verifyPassword' component='div' />

                  <Field type='date' name='birthDate' />
                  <ErrorMessage name='birthDate' component='div' />

                  <button type='submit' disabled={ isSubmitting }>Registrarme</button>
              </Form>
            )
        }
      </Formik>
  )
}
