import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Root'
import { useDispatch } from 'react-redux'
import { CButton } from '@components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutRequest } from '@redux/actions/authActions'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest())
    AsyncStorage.removeItem('token')
  }

  return (
    <View>
      <CButton title="Log out" onPress={handleLogout} />
    </View>
  )
}

export default HomeScreen

