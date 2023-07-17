import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  btnContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  errorMessage: {
    fontSize: 14,
    color: 'red',
    marginBottom: 5,
  },
})

const FormInput = ({ formKey, ...rest }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={rest.handleChange(formKey)}
        onBlur={rest.handleBlur(formKey)}
        value={rest.values[formKey]}
        placeholder={formKey}
        keyboardType={formKey === 'phone' ? 'numeric' : 'default'}
      />
      {rest.touched[formKey] && rest.errors[formKey] && (
        <Text style={styles.errorMessage}>{rest.errors[formKey]}</Text>
      )}
    </>
  )
}

const formElements = [
  'fullName',
  'email',
  'password',
  'confirmPassword',
  'phone',
]

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
  phone: Yup.number().required('Phone number is required'),
})

const SignUpForm = () => {
  const [isSubmitForm, setIsSubmitForm] = useState(false)

  const handleSubmit = values => {
    setIsSubmitForm(true)
    console.log(values)
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <View>
          {formElements.map(key => (
            <FormInput key={key} formKey={key} {...formikProps} />
          ))}

          <View style={styles.btnContainer}>
            <Button
              title="SIGN UP"
              onPress={() => {
                setIsSubmitForm(true)
                formikProps.handleSubmit()
              }}
            />
          </View>
        </View>
      )}
    </Formik>
  )
}

export default SignUpForm
