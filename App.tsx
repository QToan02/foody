import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from '@navigation'

const App = () => {
  const [loaded] = useFonts({
    Sofia: require('./assets/fonts/sofiapro-light.ttf'),
  })

  if (!loaded) return null

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
