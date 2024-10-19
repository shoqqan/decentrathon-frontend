import styles from './EducationForm.module.scss'
import { Controller } from 'react-hook-form'
import { TextInput } from '@/shared/ui/TextInput'
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { Button } from '@/shared/ui/Button'
import { MonthPickerInput } from '@/shared/ui/MonthPickerInput'
import type { EducationFormReturn } from '@/shared/hooks/useEducationForm.ts'

interface EducationFormProps {
	form: EducationFormReturn
}

export function EducationForm({ form }: EducationFormProps) {
	return (
		<form className={styles.experience_form}>
			<fieldset className={styles.fields}>
				<h2>Образование</h2>
				<Controller
					control={form.control}
					name='university'
					render={({ field }) => <Textarea label='Название университета' {...field} />}
				/>

				<Controller
					control={form.control}
					name='specialization'
					render={({ field }) => <TextInput label='Факультет' {...field} />}
				/>

				<Controller
					control={form.control}
					name='date'
					render={({ field }) => <MonthPickerInput label='Год окончания' {...field} />}
				/>
			</fieldset>

			<Button type='submit'>Сохранить</Button>
		</form>
	)
}
