import { Drawer } from '@/shared/ui/Drawer'
import { ExperienceForm } from '@/widgets/ExperienceForm/ExperienceForm.tsx'
import { useExperienceForm } from '@/shared/hooks/useExperienceForm.ts'
import type { DrawerProps } from '@mantine/core'

interface EditExperienceDrawerProps extends DrawerProps {}

export function EditExperienceDrawer({...props}:EditExperienceDrawerProps) {
	const experienceForm = useExperienceForm()
	return (
		<Drawer position='bottom' size='100%' title='Создать вакансию' {...props}>
			<ExperienceForm form={experienceForm}/>
		</Drawer>
	)
}

