import styles from './Hints.module.scss'
import { HintsCard } from './HintsCard'
import { Carousel } from '@mantine/carousel'

export function Hints() {
	const hints = Array.from({ length: 10 }).map(() => ({
		icon: <span>💡</span>,
		title: 'Что такое децентрализация?',
	}))

	return (
		<Carousel
			className={styles.hints}
			withControls={false}
			withIndicators={false}
			slideSize='130px'
			slideGap='10px'
			align='start'
		>
			{hints.map((hint) => (
				<Carousel.Slide>
					<HintsCard icon={hint.icon} title={hint.title} />
				</Carousel.Slide>
			))}
		</Carousel>
	)
}
