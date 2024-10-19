import styles from './CompanyCard.module.scss'

export function CompanyCard() {
	const feedback = {
		vacancy: {
			recruiter: {
				companyName: 'Bank CenterCredit',
				geolocation: 'Москва, ул. Ленина, д. 10, корп. 1',
			},
		},
	}

	return (
		<div className={styles.company_card}>
			<h6 className={styles.title}>{feedback.vacancy.recruiter.companyName}</h6>
			<p className={styles.geolocation}>{feedback.vacancy.recruiter.geolocation}</p>
		</div>
	)
}
