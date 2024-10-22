/* eslint-disable react/no-array-index-key */
import { VacancyCard } from '../VacanciesPage/components/Vacancies/VacancyCard'
import styles from './RecruiterVacanciesPage.module.scss'
import { useVacancies } from '@/shared/hooks/useVacancies'
import { Button } from '@/shared/ui/Button'
import { CreateVacancyDrawer } from '@/widgets/CreateVacancyDrawer'
import { useDisclosure } from '@mantine/hooks'

export default function RecruiterVacanciesPage() {
	const { vacanciesQuery } = useVacancies()
	const createVacancyModal = useDisclosure(false)

	return (
		<>
			<div className={styles.recruiter_vacancies_page}>
				<div className={styles.list}>
					{vacanciesQuery.data?.jobs?.map((item, index) => (
						<VacancyCard key={index} vacancy={item} onAccept={() => {}} />
					))}
				</div>
				<div className={styles.add}>
					<Button onClick={createVacancyModal[1].open}>Добавить вакансию</Button>
				</div>
			</div>
			<CreateVacancyDrawer opened={createVacancyModal[0]} onClose={createVacancyModal[1].close} />
		</>
	)
}
