import styles from './Hints.module.scss'
import { HintsCard } from './HintsCard'

export function Hints() {
	return (
		<div className={styles.hints}>
			<HintsCard icon={<span>💡</span>} title='Что такое децентрализация?' />
			<HintsCard icon={<span>💡</span>} title='Что такое децентрализация?' />
			<HintsCard icon={<span>💡</span>} title='Что такое децентрализация?' />
		</div>
	)
}
