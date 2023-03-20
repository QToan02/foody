import { useCallback, useEffect } from 'react'
import { Alert, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useForm } from 'react-hook-form'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CButton, CText, Input } from '@components'
import { usePasswordVisibility } from '@hooks'
import { COLORS, REGEX } from '@constants'
import { Svg, Image } from 'react-native-svg'
import { RootStackParamList } from '@navigation/Root'

type FormData = Record<string, unknown>
type Props = NativeStackScreenProps<RootStackParamList, 'Register'>

const RegisterScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })
  const { visibility, icon, handlePasswordVisibility } = usePasswordVisibility()

  const handleBackLogin = useCallback(() => navigation.navigate('Login'), [navigation])

  const onSubmit = useCallback((data: FormData) => {
    Alert.alert(JSON.stringify(data))
  }, [])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <SafeAreaView style={styles.center}>
      <View style={styles.container}>
        <Svg style={styles.logo}>
          <Image href={require('@assets/images/c1.svg')} />
        </Svg>
        <CText customStyle={styles.heading} content="Sign up" />
        <Input
          label="Full name"
          name="fullName"
          placeholder="Enter your name"
          control={control}
          rules={{
            required: 'Name is required',
            maxLength: {
              value: 30,
              message: 'Name should be maximum 30 characters long',
            },
          }}
        />
        <Input
          label="E-mail"
          name="email"
          placeholder="Your email or phone"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: REGEX.EMAIl,
              message: 'Email not in the right format',
            },
          }}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={visibility}
          icon={icon}
          onShowPassword={handlePasswordVisibility}
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
        <CButton title="sign up" onPress={handleSubmit(onSubmit)} />
        <View style={[styles.spacing, styles.display]}>
          <CText content="Already have an account? " customStyle={[styles.desc, styles.descBlack]} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleBackLogin}>
            <CText content="Login" customStyle={styles.desc} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 37,
    fontWeight: 'bold',
    lineHeight: 44,
  },
  spacing: {
    marginTop: 20,
  },
  display: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  desc: {
    color: COLORS.ORANGE,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 14,
  },
  descBlack: {
    color: COLORS.BLACK,
  },
  logo: {
    position: 'absolute',
    top: -110,
    left: 15,
  },
})
