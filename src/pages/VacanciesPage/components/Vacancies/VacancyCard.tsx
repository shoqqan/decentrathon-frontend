import styles from './Vacancies.module.scss'
import { getCurrencySymbol } from '@/shared/helpers/getCurrencySymbol'
import type { TJob } from '@/shared/types'
import { Button } from '@/shared/ui/Button'
import type { ComponentPropsWithoutRef } from 'react'

interface VacancyCardProps extends Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'> {
	vacancy: TJob
	onAccept: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function VacancyCard({ vacancy, onAccept, ...props }: VacancyCardProps) {
	return (
		<button type='button' className={styles.vacancies_card} {...props}>
			<div className={styles.header}>
				<h5 className={styles.title}>{vacancy.title}</h5>
				<p className={styles.salary}>
					<span>{vacancy.salary_from}</span>
					<span>-</span>
					<span>{vacancy.salary_to}</span>
					<span>{getCurrencySymbol('ru-RU', 'RUB')}</span>
				</p>
			</div>
			<div className={styles.content}>
				<p>{vacancy.experience}</p>
				<p>{vacancy.work_type}</p>
			</div>
			<div className={styles.percentage}>
				<span>10%</span>
				<span>Подходит по вашим навыкам</span>
			</div>
			<Button onClick={onAccept}>Откликнуться</Button>
		</button>
	)
}
