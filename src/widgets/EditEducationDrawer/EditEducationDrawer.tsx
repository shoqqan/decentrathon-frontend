import { Drawer } from '@/shared/ui/Drawer'
import type { DrawerProps } from '@mantine/core'
import { useEducationForm } from '@/shared/hooks/useEducationForm.ts'
import { EducationForm } from '@/widgets/EducationForm'

interface EditExperienceDrawerProps extends DrawerProps {}

export function EditEducationDrawer({...props}:EditExperienceDrawerProps) {
	const educationForm = useEducationForm()
	return (
		<Drawer position='bottom' size='100%' title='Образование' {...props}>
			<EducationForm form={educationForm}/>
		</Drawer>
	)
}

