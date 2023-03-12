import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { LoginScreen } from '@screens'
import { useFonts } from 'expo-font'

const App = () => {
  const [loaded] = useFonts({
    Sofia: require('./assets/fonts/sofiapro-light.ttf'),
  })

  if (!loaded) return null

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

export default App
