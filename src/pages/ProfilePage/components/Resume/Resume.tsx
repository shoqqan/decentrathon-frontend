import styles from './Resume.module.scss'
import { EditableField } from '@/shared/ui/EditableField/EditableField.tsx'

export function Resume() {
	return (
		<div className={styles.resume}>
			<div>
				<h2>Опыт работы 3 года</h2>
				<EditableField>
					<div className={styles.job}>
						<h3>Frontend-разработчик</h3>
						<p>Bank CenterCredit</p>
						<p>Май 2024 - сейчас (6 месяцев)</p>
					</div>
				</EditableField>
				<EditableField>
					<div className={styles.job}>
						<h3>Backend-разработчик</h3>
						<p>Bank CenterCredit</p>
						<p>Май 2024 - сейчас (6 месяцев)</p>
					</div>
				</EditableField>
			</div>
		</div>
	)
}

