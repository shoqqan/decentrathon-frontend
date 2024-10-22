import { Activities } from './components/Activities'
import { Hints } from './components/Hints'
import { Search } from './components/Search'
import { Vacancies } from './components/Vacancies'
import styles from './VacanciesPage.module.scss'
import { useVacancies } from '@/shared/hooks/useVacancies'

export default function VacanciesPage() {
	const { vacanciesQuery } = useVacancies()

	return (
		<div className={styles.vacancies_page}>
			<Search />
			<Activities />
			<Hints />
			<Vacancies vacancies={vacanciesQuery} />
		</div>
	)
}
