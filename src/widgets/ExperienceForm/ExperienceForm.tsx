import styles from './ExperienceForm.module.scss'
import { Controller } from 'react-hook-form'
import { TextInput } from '@/shared/ui/TextInput'
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { Select } from '@/shared/ui/Select'
import { Button } from '@/shared/ui/Button'
import type { ExperienceFormReturn } from '@/shared/hooks/useExperienceForm.ts'
import { MonthPickerInput } from '@/shared/ui/MonthPickerInput'

interface ExperienceFormProps {
	form: ExperienceFormReturn
}

export function ExperienceForm({ form }: ExperienceFormProps) {
	return (
		<form className={styles.experience_form}>
			<fieldset className={styles.fields}>
				<Controller
					control={form.control}
					name='date'
					render={({field:{value,onChange, ...field} }) => <MonthPickerInput value={value[0]} label='Начало работы' {...field} />}
				/>
				<Controller
					control={form.control}
					name='date'
					render={({field:{value,onChange, ...field} }) => <MonthPickerInput value={value[1]} label='Конец работы' {...field} />}
				/>
				<h2>Организация</h2>
				<Controller
					control={form.control}
					name='company'
					render={({ field }) => <Textarea label='Название комании' {...field} />}
				/>

				<Controller
					control={form.control}
					name='jobTitle'
					render={({ field }) => <TextInput label='Должность' {...field} />}
				/>

				<Controller
					control={form.control}
					name='description'
					render={({ field }) => <Select label='Обязанности и достижения' {...field} />}
				/>
			</fieldset>

			<Button type='submit'>Сохранить</Button>
		</form>
	)
}
