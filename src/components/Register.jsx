import { ErrorMessage, Field, Form, Formik } from 'formik'
import Error from './VerifyComponents'
import { getAge } from '../utils/utils'
import { icons } from '../utils/assetsLoader'

const uriOk = `url(${icons.ok})`
const uriNotOk = `url(${icons.notOk})`

const REGEX_MAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const styles = {
  input: 'h-11 w-full border border-black px-3 pt-1 pb-2 rounded-2xl focus:outline-[#E063A3] mb-[1px]'
}

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

        if (!values.name) errors.name = 'Necesitamos que completes este campo'
        if (!values.surname) errors.surname = 'Necesitamos que completes este campo'
        if (!values.email) errors.email = 'Necesitamos que completes este campo'
        if (!values.password) errors.password = 'Necesitamos que completes este campo'
        if (!values.verifyPassword) errors.verifyPassword = 'Necesitamos que completes este campo'
        if (!values.birthDate) errors.birthDate = 'Necesitamos que completes este campo'

        if (!REGEX_MAIL.test(values.email)) errors.email = 'Debes ingresar un email válido'
        if (values.verifyPassword !== values.password) errors.verifyPassword = 'Las contraseñas no coinciden'

        if (values.password.length <= 7) errors.password = 'Mínimo 8 caracteres, al menos una letra y un número'
        if (!/\d/.test(values.password) || !/[a-zA-Z]/.test(values.password)) errors.password = 'Mínimo 8 caracteres, al menos una letra y un número'

        if (/[^A-Za-z]/.test(values.name)) errors.name = 'No puede contener caracteres especiales o alfanuméricos'
        if (/[^A-Za-z]/.test(values.surname)) errors.surname = 'No puede contener caracteres especiales o alfanuméricos'

        if (getAge(values.birthDate) < 18) errors.birthDate = 'Debes ser mayor de edad para registrarte'

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting, errors, values }) => {
        const check = !errors.name && !errors.surname && !errors.email && !errors.password && !errors.verifyPassword && !errors.birthDate && values.birthDate && values.email && values.name && values.password && values.surname && values.verifyPassword

        return (
          <Form className="w-[95%] flex flex-col items-center justify-center">
            <div className='w-full h-[4.3rem] mt-2.5 mb-1 flex flex-col'>
              <Field
                style={{ borderColor: errors.name ? 'red' : 'black' }}
                className={styles.input}
                type="text"
                name="name"
                placeholder='Nombre'
              />
              <ErrorMessage name="name" component={Error} />
            </div>

            <div className='w-full h-[4.3rem] mb-1 flex flex-col'>
              <Field
                style={{ borderColor: errors.surname ? 'red' : 'black' }}
                className={styles.input}
                type="text"
                name="surname"
                placeholder='Apellido'
              />
              <ErrorMessage name="surname" component={Error} />
            </div>

            <div className='w-full h-[4.3rem] mb-1 flex flex-col'>
              <Field
                style={{ borderColor: errors.birthDate ? 'red' : 'black' }}
                className={styles.input + ' text-gray-400 birthDateRegister'}
                type="date" name="birthDate"
              />
              <ErrorMessage name="birthDate" component={Error} />
            </div>

            <div className='w-full h-[4.3rem] mb-1 flex flex-col'>
              <Field
                style={{ borderColor: errors.email ? 'red' : 'black' }}
                className={styles.input}
                type="email"
                name="email"
                placeholder='Email'
              />
              <ErrorMessage name="email" component={Error} />
            </div>

            <div className='w-full h-[4.3rem] mb-1 flex flex-col'>
              <Field
                style={{
                  borderColor: errors.password ? 'red' : 'black',
                  backgroundImage: !errors.verifyPassword && values.verifyPassword && values.password ? uriOk : values.verifyPassword && values.password && errors.verifyPassword ? uriNotOk : null
                }}
                className={styles.input + ' bg-no-repeat bg-[center_right_1rem]'}
                type="password"
                name="password" placeholder='Contraseña'
              />
              <ErrorMessage name="password" component={Error} />
            </div>

            <div className='w-full h-[4.3rem] flex flex-col'>
              <Field
                style={{
                  borderColor: errors.verifyPassword ? 'red' : 'black',
                  backgroundImage: !errors.verifyPassword && values.verifyPassword && values.password ? uriOk : values.verifyPassword && values.password && errors.verifyPassword ? uriNotOk : null
                }}
                className={styles.input + ' bg-no-repeat bg-[center_right_1rem]'}
                type="password"
                name="verifyPassword"
                placeholder='Confirmar contraseña'
              />
              <ErrorMessage name="verifyPassword" component={Error} />
            </div>

            <button style={{ opacity: check ? 1 : 0.4 }} className='mb-3 bg-[#E063A3] text-white uppercase font-semibold w-full py-3 rounded-xl' type="submit" disabled={isSubmitting}>
              Registrarme
            </button>
          </Form>
        )
      }
      }
    </Formik>
  )
}
