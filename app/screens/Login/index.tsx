import { Alert, Button, StyleSheet, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { Input } from 'components'
import { useCallback, useEffect } from 'react'

type FormData = Record<string, unknown>

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = useCallback((data: FormData) => {
    Alert.alert(JSON.stringify(data))
  }, [])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        name="email"
        placeholder="Enter email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Email not in the right format',
          },
        }}
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter password"
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password should be minimum 6 characters long',
          },
          maxLength: {
            value: 40,
            message: 'Password should be maximum 40 characters long',
          },
        }}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
})
