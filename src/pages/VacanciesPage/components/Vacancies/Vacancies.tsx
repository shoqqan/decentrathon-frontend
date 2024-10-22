import styles from './Vacancies.module.scss'
import { VacancyCard } from './VacancyCard'
import type { TJobListResponse } from '@/shared/services/jobs'
import type { TJob } from '@/shared/types'
import type { UseQueryResult } from 'react-query'
import { useNavigate } from 'react-router-dom'

interface VacanciesProps {
	vacancies: UseQueryResult<TJobListResponse>
}

export function Vacancies({ vacancies }: VacanciesProps) {
	const navigate = useNavigate()

	const handleVacancyClick = (vacancy: TJob) => () => {
		navigate(`/vacancies/${1}`)
	}

	const handleAcceptVacancy = (vacancy: TJob) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		event.stopPropagation()
	}

	return (
		<>
			<div className={styles.vacancies}>
				<h6 className={styles.title}>Вакансии для вас</h6>
				<div className={styles.list}>
					{vacancies.data?.jobs?.map((vacancy) => (
						<VacancyCard
							key={vacancy.title}
							vacancy={vacancy}
							onClick={handleVacancyClick(vacancy)}
							onAccept={handleAcceptVacancy(vacancy)}
						/>
					))}
				</div>
			</div>
		</>
	)
}
