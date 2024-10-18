import styles from "./Statistics.module.scss"
import { Button } from '@/shared/ui/Button'

export function Statistics() {
	return (
		<div className={styles.statistics}>
			<h3>Статистика за неделю</h3>
			<div className={styles.metrics}>
				<div>
					<p>14</p>
					<p>Показы</p>
				</div>
				<div>
					<p>14</p>
					<p>Просмотры</p>
				</div>
				<div>
					<p>14</p>
					<p>Приглашения</p>
				</div>
			</div>
			<Button>Поднять в поиске</Button>
		</div>
	)
}
