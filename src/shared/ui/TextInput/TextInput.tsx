import styles from './TextInput.module.scss'
import { TextInput } from '@mantine/core'

const TextInputExtend = TextInput.extend({
	classNames: {
		wrapper: styles.text_input,
		input: styles.text_input_input,
	},
})

export { TextInput, TextInputExtend }
