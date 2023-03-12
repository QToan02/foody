import { memo } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, TextStyle, View } from 'react-native'
import { Controller, FieldError } from 'react-hook-form'
import { UseControllerProps, RegisterOptions } from 'react-hook-form/dist/types'

interface Props extends TextInputProps, UseControllerProps {
  label?: string
  labelStyle?: TextStyle
  error?: FieldError | undefined
  defaultValue?: string
  rules?: RegisterOptions
}

const Input = ({ name, control, rules = {}, label, labelStyle, secureTextEntry, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={[labelStyle]}>{label}</Text>}
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <View style={[styles.inputContainer, { borderColor: error ? 'red' : '#e8e8e8' }]}>
              <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && <Text style={styles.errorMessage}>{error && error.message}</Text>}
          </>
        )}
      />
    </View>
  )
}

export default memo(Input)

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'stretch',
  },
})
