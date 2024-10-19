import styles from './Resume.module.scss'
import type { Field} from '@/widgets/ResumeSection';
import { ResumeSection } from '@/widgets/ResumeSection'

export function Resume() {
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
			<ResumeSection title="Опыт работы 3 года" fields={experienceFields}/>
			<ResumeSection title="Образование" fields={educationFields}/>
		</div>
	)
}
