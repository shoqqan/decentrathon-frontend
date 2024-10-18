import styles from './Button.module.scss'
import { UnstyledButton } from '@mantine/core'
import clsx from 'clsx'
import type { ComponentPropsWithRef, ComponentRef } from 'react'
import { forwardRef } from 'react'

interface ButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button = forwardRef<ComponentRef<'button'>, ButtonProps>(({ children, className, ...props }, ref) => (
	<UnstyledButton className={clsx(styles.button, className)} ref={ref} {...props}>
		{children}
	</UnstyledButton>
))
