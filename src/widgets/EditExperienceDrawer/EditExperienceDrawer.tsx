import { Drawer } from '@/shared/ui/Drawer'

import type { DrawerProps } from '@mantine/core'
import { useExperienceForm } from '@/shared/hooks/useExperienceForm.ts'
import { ExperienceForm } from '@/widgets/ExperienceForm/ExperienceForm.tsx'

interface EditExperienceDrawerProps extends DrawerProps {}

export function EditExperienceDrawer({...props}:EditExperienceDrawerProps) {
	const educationForm = useExperienceForm()
	return (
		<Drawer position='bottom' size='100%' title='Опыт работы' {...props}>
			<ExperienceForm form={educationForm}/>
		</Drawer>
	)
}

