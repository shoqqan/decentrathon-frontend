import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { ReactNode } from 'react'
import styles from "./EditableField.module.scss"

interface EditableFieldProps{
	children: ReactNode,
	onCheck: ()=>void
}

export function EditableField({children,onCheck}: EditableFieldProps) {
	return (
		<div className={styles.container} onClick={()=>{
			onCheck()
		}}>
			{children}
			<ChevronRightIcon width={24} height={24} color="gray"/>
		</div>
	)
}

