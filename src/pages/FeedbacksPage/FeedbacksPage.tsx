import { Feedbacks } from './components/Feedbacks'
import { Filter } from './components/Filter'
import styles from './FeedbacksPage.module.scss'

export default function FeedbacksPage() {
	return (
		<div className={styles.feedbacks_page}>
			<Filter />
			<Feedbacks />
		</div>
	)
}
