import { Info } from './components/Info'
import { Map } from './components/Map'
import styles from './VacancyDetailPage.module.scss'
import { useTelegramBackButton } from '@/shared/hooks/useTelegramBackButton'

export default function VacancyDetailPage() {
	useTelegramBackButton()

	const vacancy = {
		title: 'Разработка',
		experience: '3 месяца',
		workType: 'full-time',
		description: 'Разработка системы управления контентом для сайта https://decentrathon.org',
		salary: [100, 200] as [number, number],
	}

	return (
		<div className={styles.vacancy_detail_page}>
			<Info vacancy={vacancy} />
			<Map />
			<p className={styles.description}>{vacancy.description}</p>
		</div>
	)
}
