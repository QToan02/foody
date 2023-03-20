import { memo } from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import CText from '@components/CText'
import { COLORS } from '@constants'

interface Props {
  title: string
  onPress: () => void
  customStyle?: ViewStyle
  hitSlop?: number
  variant?: 'primary' | 'secondary'
}

const CButton = ({ title, onPress, hitSlop, variant = 'primary' }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      style={variant === 'primary' ? [styles.button, styles.primary] : [styles.button, styles.secondary]}
    >
      <CText
        customStyle={variant === 'primary' ? [styles.content] : [styles.content, styles.contentBlack]}
        content={title}
      />
    </Pressable>
  )
}

export default memo(CButton)

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 32,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.ORANGE,
  },
  primary: {
    backgroundColor: COLORS.ORANGE,
  },
  secondary: {
    backgroundColor: COLORS.WHITE,
  },
  content: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 15,
    color: COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 100,
  },
  contentBlack: {
    color: COLORS.BLACK,
  },
})
