import { useCallback, useEffect, useContext } from 'react'
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { CButton, CText, Input } from '@components'
import { usePasswordVisibility } from '@hooks'
import { COLORS, REGEX } from '@constants'
import { Svg, Image } from 'react-native-svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '@navigation/Root'
import { login } from '@services'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loginFailure, loginRequest, loginSuccess } from '@redux/actions/authActions'
import { RootState } from '@redux/store'

type FormData = Record<string, unknown>
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state: RootState)=> state.authReducer)
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
  const { visibility, icon, handlePasswordVisibility } = usePasswordVisibility()

  const handleBackRegister = useCallback(() => navigation.navigate('Register'), [navigation])

  const onSubmit = useCallback(async (data: FormData) => {
    dispatch(loginRequest())
    await login(data)
      .then(res => {
        AsyncStorage.setItem('token', res.token)
        dispatch(loginSuccess())
      })
      .catch(error => {
        dispatch(loginFailure())
        Alert.alert("Login failed", "Invalid username or password")
      })
  }, [])

  return (
    <SafeAreaView style={styles.center}>
      <View style={styles.container}>
        <Svg style={styles.logo}>
          <Image href={require('@assets/images/c1.svg')} />
        </Svg>
        <CText customStyle={styles.heading} content="Login" />
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
        <TouchableOpacity style={styles.spacing} activeOpacity={0.5}>
          <CText content="Forgot password?" customStyle={styles.desc} />
        </TouchableOpacity>
        <CButton title="login" onPress={handleSubmit(onSubmit)} />
        <View style={[styles.spacing, styles.display]}>
          <CText content="Don't have an account? " customStyle={[styles.desc, styles.descBlack]} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleBackRegister}>
            <CText content="Sign up" customStyle={styles.desc} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    width: '80%',
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
