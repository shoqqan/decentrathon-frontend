import styles from './Activities.module.scss'
import { BoltIcon } from '@heroicons/react/16/solid'

export function Activities() {
	const activities = {
		percentage: 18,
	}

	return (
		<div className={styles.activities}>
			<div className={styles.content}>
				<div className={styles.title}>
					<BoltIcon width={24} height={24} color='red' />
					<span>Ваша активность</span>
				</div>
				<div className={styles.percentage}>{activities.percentage}%</div>
			</div>
			<div className={styles.progress}>
				<span className={styles.progress_bar} style={{ width: `${activities.percentage}%` }} />
			</div>
		</div>
	)
}
