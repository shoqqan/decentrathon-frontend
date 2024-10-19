import styles from './ResumeSection.module.scss'
import { EditableField } from '@/shared/ui/EditableField'
import { UnstyledButton } from '@mantine/core'
import { PlusCircleIcon } from '@heroicons/react/24/outline'

export interface Field{
	head?:string,
	paragraph:string,
	date?:string
}

interface ResumeSectionProps{
	title:string
	fields:Field[]
	addButtonTitle: string
	onCheck:()=>void
}
export function ResumeSection({fields,title,onCheck,addButtonTitle}:ResumeSectionProps) {

	return (
		<div className={styles.field}>
			<h2>{title}</h2>
			{fields.map((el)=>
				(
					<EditableField key={el.paragraph} onCheck={onCheck}>
						<div className={styles.job}>
							{el.head &&
								<h3>{el.head}</h3>
							}
							<p>{el.paragraph}</p>
							{el.date &&
								<p className={styles.date}>{el.date}</p>
							}
						</div>
					</EditableField>
				)
			)}
			<UnstyledButton className={styles.add_button}>
				<PlusCircleIcon width={24} height={24}/>
				<p>{addButtonTitle}</p>
			</UnstyledButton>
		</div>
	)
}

