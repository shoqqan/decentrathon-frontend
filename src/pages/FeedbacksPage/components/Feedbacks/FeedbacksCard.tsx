import styles from './Feedbacks.module.scss'
import { Button } from '@/shared/ui/Button'
import { format } from 'date-fns'

export function FeedbacksCard() {
	const feedback = {
		status: 'Не посмотрен',
		createdAt: new Date(),
		vacancy: {
			title: 'Разработка',
		},
	}

	return (
		<button type='button' className={styles.feedbacks_card}>
			<div className={styles.header}>
				<div className={styles.status}>{feedback.status}</div>
			</div>
			<div className={styles.content}>
				<h6>{feedback.vacancy.title}</h6>
				<p>{format(feedback.createdAt, 'dd.MM.yyyy')}</p>
			</div>
			<Button
				onClick={() => {
					window.open('https://t.me/GazizFront', '_blank')
				}}
			>
				Написать в чат
			</Button>
		</button>
	)
}
