import { Search } from './components/Search'
import styles from './VacanciesPage.module.scss'

export default function VacanciesPage() {
	return (
		<div className={styles.vacancies_page}>
				<Search />
		</div>
	)
}
