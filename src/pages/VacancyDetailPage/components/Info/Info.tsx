import styles from './Info.module.scss'

interface InfoProps {
	vacancy: any
}

export function Info({ vacancy }: InfoProps) {
	return (
		<div className={styles.info}>
			<h6 className={styles.title}>{vacancy.title}</h6>
			<div className={styles.content}>
				<p>{vacancy.experience}</p>
				<p>{vacancy.workType}</p>
			</div>
		</div>
	)
}
