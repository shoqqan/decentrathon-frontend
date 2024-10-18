import styles from './Vacancies.module.scss'
import { VacancyCard } from './VacancyCard'

export function Vacancies() {
	const vacancies = [
		{
			title: 'Разработка',
			experience: '3 месяца',
			workType: 'full-time',
			description: 'Разработка системы управления контентом для сайта https://decentrathon.org',
			salary: [100, 200] as [number, number],
		},
	]

	return (
		<div className={styles.vacancies}>
			<h6 className={styles.title}>Вакансии для вас</h6>
			<div className={styles.list}>
				{vacancies.map((vacancy) => (
					<VacancyCard key={vacancy.title} {...vacancy} />
				))}
			</div>
		</div>
	)
}
