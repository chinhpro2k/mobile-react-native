import React from 'react'
import { Formik, FormikValues, FormikConfig } from 'formik'

type ExtraProps = {
  onSubmitForm: (data: any) => void
}

function Form<Values extends FormikValues = FormikValues>(
  props: FormikConfig<Values> & ExtraProps,
) {
  const { initialValues, validationSchema, onSubmitForm, children } = props
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmitForm(values)
        actions.resetForm()
      }}
    >
      {children}
    </Formik>
  )
}

export default Form
