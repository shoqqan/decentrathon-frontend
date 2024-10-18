import styles from './Hints.module.scss'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface HintsCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'title'> {
	icon: React.ReactNode
	title: React.ReactNode
}

export function HintsCard({ className, icon, title, ...props }: HintsCardProps) {
	return (
		<div className={clsx(styles.hints_item)} {...props}>
			{icon}
			<div className={styles.title}>{title}</div>
		</div>
	)
}
