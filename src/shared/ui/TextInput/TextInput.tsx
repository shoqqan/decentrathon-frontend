import styles from './TextInput.module.scss'
import { TextInput } from '@mantine/core'

const TextInputExtend = TextInput.extend({
	classNames: {
		root: styles.text_input,
	},
})

export { TextInput, TextInputExtend }
