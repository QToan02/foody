import { useCallback, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen, SplashScreen, HomeScreen } from '@screens'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '@redux/store';
import { loginSuccess } from '@redux/actions/authActions';

export type RootStackParamList = {
  Splash: undefined
  Login: undefined
  Register: undefined
  Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {

  const {isAuthenticated} = useSelector((state: RootState)=> state.authReducer)
  const dispatch = useDispatch()

  const getUserData = async () => {
    const tokenData = await AsyncStorage.getItem('token');
    if (tokenData !== null) {
      dispatch(loginSuccess())
    } 
  };

  useEffect(() => {
    getUserData()
  }, [])

  const setScreenOpt = useCallback(
    () => ({
      headerShown: false,
    }),
    []
  )

  return (
    <Stack.Navigator screenOptions={setScreenOpt}>
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'slide_from_right' }} />
        </>
        ): 
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ animation: 'slide_from_left' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
        </>
       }
    </Stack.Navigator>
  )
}

export default RootNavigator
