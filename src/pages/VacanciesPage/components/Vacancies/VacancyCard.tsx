import styles from './Vacancies.module.scss'
import { Button } from '@/shared/ui/Button'
import type { ComponentPropsWithoutRef } from 'react'

interface VacancyCardProps extends Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
	title: string
	experience: string
	salary: [number, number]
	workType: string
}

export function VacancyCard({ title, experience, salary, workType }: VacancyCardProps) {
	return (
		<div className={styles.vacancies_card}>
			<h5 className={styles.title}>{title}</h5>
			<p className={styles.salary}>
				<span>{salary[0]}</span>
				<span>-</span>
				<span>{salary[1]}</span>
			</p>
			<div className={styles.content}>
				<p>{experience}</p>
				<p>{workType}</p>
			</div>
			<Button>Откликнуться</Button>
		</div>
	)
}
