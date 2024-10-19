import styles from './Info.module.scss'

export function Info() {
	const feedback = {
		status: 'Не посмотрен',
		createdAt: new Date(),
		vacancy: {
			title: 'Разработка',
			experience: '3 месяца',
			workType: 'full-time',
			description: 'Разработка системы управления контентом для сайта https://decentrathon.org',
		},
	}

	return (
		<div className={styles.info}>
			<h6 className={styles.title}>{feedback.vacancy.title}</h6>
			<div className={styles.content}>
				<p>{feedback.vacancy.experience}</p>
				<p>{feedback.vacancy.workType}</p>
			</div>
		</div>
	)
}
