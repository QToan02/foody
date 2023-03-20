import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from '@navigation'

const App = () => {
  const [loaded] = useFonts({
    Sofia: require('./assets/fonts/sofiapro-light.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync()
    }
  }, [loaded])

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
