import { DrawerExtend } from '../ui/Drawer'
import { SelectExtend } from '../ui/Select'
import { TextareaExtend } from '../ui/Textarea/Textarea'
import { TextInputExtend } from '../ui/TextInput'
import { createTheme } from '@mantine/core'
import { MonthPickerInputExtend } from '../ui/MonthPickerInput'

export const themeConfig = createTheme({
	primaryColor: 'blue',
	components: {
		TextInput: TextInputExtend,
		Drawer: DrawerExtend,
		Textarea: TextareaExtend,
		Select: SelectExtend,
		MonthPickerInput: MonthPickerInputExtend
	},
})
