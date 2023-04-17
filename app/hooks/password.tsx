import { useState, useCallback } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Icon = keyof typeof MaterialCommunityIcons.glyphMap

const usePasswordVisibility = () => {
  const [visibility, setVisibility] = useState<boolean>(true)
  const [icon, setIcon] = useState<Icon>('eye')

  const handlePasswordVisibility = useCallback(() => {
    switch (icon) {
      case 'eye':
        setIcon('eye-off')
        setVisibility(!visibility)
        break

      case 'eye-off':
        setIcon('eye')
        setVisibility(!visibility)
        break

      default:
        break
    }
  }, [visibility, icon])

  return {
    visibility,
    icon,
    handlePasswordVisibility,
  }
}

export default usePasswordVisibility
