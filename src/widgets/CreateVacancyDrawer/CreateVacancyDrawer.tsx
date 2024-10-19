import { VacancyForm } from '../VacancyForm'
import { useVacancyForm } from '@/shared/hooks/useVacancyForm'
import { Drawer } from '@/shared/ui/Drawer'
import type { DrawerProps } from '@mantine/core'

interface CreateVacancyDrawerProps extends DrawerProps {}

export function CreateVacancyDrawer({ ...props }: CreateVacancyDrawerProps) {
	const vacancyForm = useVacancyForm()

	return (
		<Drawer position='bottom' size='100%' title='Создать вакансию' {...props}>
			<VacancyForm form={vacancyForm} />
		</Drawer>
	)
}
