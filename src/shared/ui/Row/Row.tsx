import styles from './Row.module.scss'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface RowProps extends ComponentPropsWithoutRef<'div'> {}

export function Row({ children, className, ...props }: RowProps) {
	return (
		<div className={clsx(styles.row, className)} {...props}>
			{children}
		</div>
	)
}
