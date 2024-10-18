import styles from './IconButton.module.scss'
import { UnstyledButton } from '@mantine/core'
import clsx from 'clsx'
import type { ComponentPropsWithRef, ComponentRef } from 'react'
import { forwardRef } from 'react'

interface IconButtonProps extends ComponentPropsWithRef<'button'> {}

export const IconButton = forwardRef<ComponentRef<'button'>, IconButtonProps>(
	({ children, className, ...props }, ref) => (
		<UnstyledButton className={clsx(styles.icon_button, className)} ref={ref} {...props}>
			{children}
		</UnstyledButton>
	),
)
