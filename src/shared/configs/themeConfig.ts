import { TextInputExtend } from '../ui/TextInput'
import { createTheme } from '@mantine/core'

export const themeConfig = createTheme({
	primaryColor: 'blue',
	components: {
		TextInput: TextInputExtend,
	},
})
