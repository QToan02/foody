import { useRef, useEffect, useContext } from 'react'
import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Root'
import { COLORS } from '@constants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { hideSplash } from '@redux/actions/systemActions'

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>

const SplashScreen = ({ navigation }: Props) => {
  const {isAuthenticated} = useSelector((state: RootState)=> state.authReducer)
  const dispatch = useDispatch()
  const animation = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start(() => {
      navigation.navigate(isAuthenticated ? 'Home' : 'Login')
      dispatch(hideSplash())
    })
  }, [navigation, animation])

  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <View>
        <Image source={require('@assets/images/logo.png')} />
      </View>
    </Animated.View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
