import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { ReactNode } from 'react'
import styles from "./EditableField.module.scss"

interface EditableFieldProps{
	children: ReactNode
}

export function EditableField({children}: EditableFieldProps) {
	return (
		<div className={styles.container}>
			{children}
			<ChevronRightIcon width={24} height={24} color="gray"/>
		</div>
	)
}

