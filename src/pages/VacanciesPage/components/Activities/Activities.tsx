import styles from './Activities.module.scss'

export function Activities() {
	const activities = {
		percentage: 18,
	}

	return (
		<div className={styles.activities}>
			<>{}</>
			<div className={styles.progress} />
		</div>
	)
}
