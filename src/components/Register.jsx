import { ErrorMessage, Field, Form, Formik } from 'formik'
import Error from './VerifyComponents'
const REGEX_MAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

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
      validate={(values) => {
        const errors = {}

        if (!values.email) errors.email = 'Required'
        if (!REGEX_MAIL.test(values.email)) errors.email = 'Invalid email address'

        return errors
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form className='w-11/12 flex flex-col items-center justify-center'>
          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="text" name="name" placeholder='Nombre' />
          <ErrorMessage name="name" component={Error} />

          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="text" name="surname" placeholder='Apellido' />
          <ErrorMessage name="surname" component={Error} />

          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="date" name="birthDate" placeholder='Fecha de Nacimiento' />
          <ErrorMessage name="birthDate" component={Error} />

          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="email" name="email" placeholder='Email' />
          <ErrorMessage name="email" component={Error} />

          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="password" name="password" placeholder='Contraseña' />
          <ErrorMessage name="password" component={Error} />

          <Field className='w-full border border-black px-3 pt-1 pb-2.5 rounded-xl my-3.5' type="password" name="verifyPassword" placeholder='Confirmar contraseña' />
          <ErrorMessage name="verifyPassword" component={Error} />

          <button className='my-3 bg-[#E063A3] opacity-40 text-white uppercase font-semibold w-full py-3 rounded-xl' type="submit" disabled={isSubmitting}>
            Registrarme
          </button>
        </Form>
      )}
    </Formik>
  )
}
