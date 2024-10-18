import { Activities } from './components/Activities'
import { Hints } from './components/Hints'
import { Search } from './components/Search'
import styles from './VacanciesPage.module.scss'
import { MainLayout } from '@/widgets/MainLayout'

export default function VacanciesPage() {
	return (
		<div className={styles.vacancies_page}>
			<MainLayout>
				<Search />
				<Activities />
				<Hints />
			</MainLayout>
		</div>
	)
}
