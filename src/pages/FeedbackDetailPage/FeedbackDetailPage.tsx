import { CompanyCard } from './components/CompanyCard'
import { Info } from './components/Info'
import styles from './FeedbackDetailPage.module.scss'
import { useTelegramBackButton } from '@/shared/hooks/useTelegramBackButton'

export default function FeedbackDetailPage() {
	useTelegramBackButton()

	return (
		<div className={styles.feedback_detail_page}>
			<Info />
			<CompanyCard />
			<p className={styles.description}>Комментарии</p>
		</div>
	)
}
