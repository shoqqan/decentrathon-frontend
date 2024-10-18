import styles from './ProfilePage.module.scss'
import { MainLayout } from '@/widgets/MainLayout'
import { Search } from '@/pages/VacanciesPage/components/Search'

export default function ProfilePage() {
	return (
		<div className={styles.vacancies_page}>
			<MainLayout>
				<Search />
			</MainLayout>
		</div>
	)
}
