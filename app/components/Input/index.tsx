import { memo } from 'react'
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { Controller, FieldError } from 'react-hook-form'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { UseControllerProps, RegisterOptions } from 'react-hook-form/dist/types'
import CText from '@components/CText'
import { COLORS } from '@constants'

interface Props extends TextInputProps, UseControllerProps {
  label?: string
  error?: FieldError | undefined
  defaultValue?: string
  rules?: RegisterOptions
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  onShowPassword?: () => void
}

const Input = ({ name, control, rules = {}, label, secureTextEntry, placeholder, onShowPassword, icon }: Props) => {
  return (
    <View style={styles.container}>
      {label && <CText customStyle={styles.label} content={label} />}
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <View style={[styles.inputContainer, { borderColor: error ? 'red' : COLORS.GRAY }]}>
              <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
              />
              <Pressable onPress={onShowPassword}>
                <MaterialCommunityIcons name={icon} size={22} color={COLORS.ICON_GRAY} />
              </Pressable>
            </View>
            {error && <CText customStyle={styles.errorMessage} content={error && error.message} />}
          </>
        )}
      />
    </View>
  )
}

export default memo(Input)

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  label: {
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  errorMessage: {
    color: 'red',
    fontWeight: '600',
    alignSelf: 'stretch',
  },
})
