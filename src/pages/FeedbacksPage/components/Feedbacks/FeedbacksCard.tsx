import styles from './Feedbacks.module.scss'
import { Button } from '@/shared/ui/Button'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export function FeedbacksCard() {
	const navigate = useNavigate()

	const feedback = {
		status: 'Не посмотрен',
		createdAt: new Date(),
		vacancy: {
			title: 'Разработка',
		},
	}

	return (
		<button
			type='button'
			className={styles.feedbacks_card}
			onClick={() => {
				navigate(`/feedbacks/${1}`)
			}}
		>
			<div className={styles.header}>
				<div className={styles.status}>{feedback.status}</div>
			</div>
			<div className={styles.content}>
				<h6>{feedback.vacancy.title}</h6>
				<p>{format(feedback.createdAt, 'dd.MM.yyyy')}</p>
			</div>
			<Button
				className={styles.button}
				onClick={(event) => {
					event.stopPropagation()
					window.open('https://t.me/GazizFront', '_blank')
				}}
			>
				Написать в чат
			</Button>
		</button>
	)
}
