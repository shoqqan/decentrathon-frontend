import { Search } from './components/Search'
import styles from './VacanciesPage.module.scss'
import { MainLayout } from '@/widgets/MainLayout'

export default function VacanciesPage() {
	return (
		<div className={styles.vacancies_page}>
			<MainLayout>
				<Search />
			</MainLayout>
		</div>
	)
}
