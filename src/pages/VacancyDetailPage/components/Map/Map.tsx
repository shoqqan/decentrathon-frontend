import styles from './Map.module.scss'
import { Map as YMap, YMaps } from '@pbe/react-yandex-maps'

export function Map() {
	return (
		<div className={styles.map__wrapper}>
			<YMaps>
				<YMap className={styles.map} defaultState={{ center: [55.751952, 37.6173], zoom: 10 }} />
			</YMaps>
		</div>
	)
}
