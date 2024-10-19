import styles from './Select.module.scss'
import { Select } from '@mantine/core'

const SelectExtend = Select.extend({
	classNames: {
		wrapper: styles.select,
		input: styles.select_input,
		dropdown: styles.select_dropdown,
	},
})

export { Select, SelectExtend }
