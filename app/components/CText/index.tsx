import { memo } from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import { COLORS } from '@constants'

interface Props {
  content: string | undefined
  customStyle?: TextStyle | TextStyle[]
}

const CText = ({ content, customStyle }: Props) => <Text style={[styles.text, customStyle]}>{content}</Text>

export default memo(CText)

const styles = StyleSheet.create({
  text: {
    color: COLORS.BLACK,
    fontFamily: 'Sofia',
    fontWeight: 'normal',
    textDecorationLine: 'none',
    textTransform: 'none',
    fontStyle: 'normal',
    fontSize: 14,
  },
})
