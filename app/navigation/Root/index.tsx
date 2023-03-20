import { useCallback } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen, SplashScreen } from '@screens'

export type RootStackParamList = {
  Splash: undefined
  Login: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  const setScreenOpt = useCallback(
    () => ({
      headerShown: false,
    }),
    []
  )

  return (
    <Stack.Navigator screenOptions={setScreenOpt} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ animation: 'slide_from_left' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
    </Stack.Navigator>
  )
}

export default RootNavigator
