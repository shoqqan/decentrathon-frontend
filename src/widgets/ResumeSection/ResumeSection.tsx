import styles from './ResumeSection.module.scss'
import { EditableField } from '@/shared/ui/EditableField'

export interface Field{
	head?:string,
	paragraph:string,
	date?:string
}

interface ResumeSectionProps{
	title:string
	fields:Field[]
}
export function ResumeSection({fields,title}:ResumeSectionProps) {
	return (
		<div className={styles.field}>
			<h2>{title}</h2>
			{fields.map((el)=>
				(
					<EditableField>
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
		</div>
	)
}

