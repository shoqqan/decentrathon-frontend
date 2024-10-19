import styles from './Resume.module.scss'
import type { Field} from '@/widgets/ResumeSection';
import { ResumeSection } from '@/widgets/ResumeSection'
import { EditExperienceDrawer } from '@/widgets/EditExperienceDrawer'
import { useDisclosure } from '@mantine/hooks'
import { EditEducationDrawer } from '@/widgets/EditEducationDrawer'

export function Resume() {
	const editExperienceModal= useDisclosure(false)
	const editEducationModal= useDisclosure(false)
	const experienceFields:Field[] = [
		{paragraph:"Bank CenterCredit", head:"Frontend-разработчик", date:"Май 2024 - сейчас(6 месяцев)"},
		{paragraph:"Bank CenterCredit", head:"Frontend-разработчик", date:"Май 2024 - сейчас(6 месяцев)"},
		{paragraph:"Bank CenterCredit", head:"Frontend-разработчик", date:"Май 2024 - сейчас(6 месяцев)"},
		{paragraph:"Bank CenterCredit", head:"Frontend-разработчик", date:"Май 2024 - сейчас(6 месяцев)"}
	]
	const educationFields:Field[] = [
		{paragraph:"Информационные системы", head:"Казахстанско-Британский технический университет, Алматы", date:"2027"},
	]
	return (
		<div className={styles.resume}>
			<div className={styles.skills}>
				<h2>Ключевые навыки</h2>
				<div className={styles.skills_container}>
					<div className={styles.skill}>javascript</div>
					<div className={styles.skill}>html</div>
					<div className={styles.skill}>css</div>
				</div>
			</div>
			<ResumeSection title="Опыт работы 3 года" addButtonTitle="добавить опыт работы" fields={experienceFields} onCheck={() =>{
				editExperienceModal[1].open()
			}}/>
			<ResumeSection title="Образование" addButtonTitle="добавить образование" fields={educationFields} onCheck={() =>{
				editEducationModal[1].open()
			}}/>
			<EditExperienceDrawer opened={editExperienceModal[0]} onClose={editExperienceModal[1].close}/>
			<EditEducationDrawer opened={editEducationModal[0]} onClose={editEducationModal[1].close}/>
		</div>
	)
}
