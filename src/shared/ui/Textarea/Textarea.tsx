import styles from './Textarea.module.scss'
import { Textarea } from '@mantine/core'

const TextareaExtend = Textarea.extend({
	classNames: {
		wrapper: styles.text_area,
		input: styles.text_area_input,
	},
})

export { Textarea, TextareaExtend }
