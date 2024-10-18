import { Activities } from './components/Activities'
import { Hints } from './components/Hints'
import { Search } from './components/Search'
import styles from './VacanciesPage.module.scss'

export default function VacanciesPage() {
	return (
		<div className={styles.vacancies_page}>
			<Search />
			<Activities />
			<Hints />
		</div>
	)
}
