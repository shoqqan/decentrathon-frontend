import styles from './Vacancies.module.scss'
import { VacancyCard } from './VacancyCard'
import { useNavigate } from 'react-router-dom'

export function Vacancies() {
	const navigate = useNavigate()

	const vacancies = [
		{
			title: 'Разработка',
			experience: '3 месяца',
			workType: 'full-time',
			description: 'Разработка системы управления контентом для сайта https://decentrathon.org',
			salary: [100, 200] as [number, number],
		},
	]

	const handleVacancyClick = (vacancy: any) => () => {
		navigate(`/vacancies/${1}`)
	}

	const handleAcceptVacancy = (vacancy: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
	}

	return (
		<div className={styles.vacancies}>
			<h6 className={styles.title}>Вакансии для вас</h6>
			<div className={styles.list}>
				{vacancies.map((vacancy) => (
					<VacancyCard
						key={vacancy.title}
						onClick={handleVacancyClick(vacancy)}
						onAccept={handleAcceptVacancy(vacancy)}
						{...vacancy}
					/>
				))}
			</div>
		</div>
	)
}
