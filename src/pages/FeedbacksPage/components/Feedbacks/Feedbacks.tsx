import styles from './Feedbacks.module.scss'
import { FeedbacksCard } from './FeedbacksCard'

export function Feedbacks() {
	return (
		<div className={styles.feedbacks}>
			{Array.from({ length: 10 }).map(() => (
				<FeedbacksCard />
			))}
		</div>
	)
}
