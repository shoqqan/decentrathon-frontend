import { Drawer } from '@/shared/ui/Drawer'
import { type DrawerProps, Select } from '@mantine/core'

interface FilterDrawerProps extends DrawerProps {}

export function FilterDrawer({ ...props }: FilterDrawerProps) {
	return (
		<Drawer position='bottom' size='md' title='Фильтры' {...props}>
			<Select label='Тип работы' placeholder='Выберите тип работы' data={['full-time', 'part-time']} />
		</Drawer>
	)
}
