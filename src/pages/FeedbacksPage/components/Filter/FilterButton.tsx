import styles from './Filter.module.scss'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface FilterButtonProps extends ComponentPropsWithoutRef<'button'> {
	isActive: boolean
}

export function FilterButton({ children, className, isActive, ...props }: FilterButtonProps) {
	return (
		<button type='button' className={clsx(styles.filter_button, className)} data-active={isActive} {...props}>
			{children}
		</button>
	)
}
