import styles from './MainLayout.module.scss'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

interface MainLayoutProps extends ComponentPropsWithoutRef<'div'> {}

export function MainLayout({ children, className, ...props }: MainLayoutProps) {
	return (
		<div className={clsx(styles.main_layout, className)} {...props}>
			{children}
		</div>
	)
}
