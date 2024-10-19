import { MonthPickerInput } from '@mantine/dates'
import styles from "./MonthPickerInput.module.scss"

const MonthPickerInputExtend = MonthPickerInput.extend({
	classNames:{
		wrapper: styles.month_picker,
		input: styles.month_picker_input
	}
})

export {MonthPickerInputExtend, MonthPickerInput}
