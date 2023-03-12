import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { LoginScreen } from 'screens'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
