import styles from './VacancyForm.module.scss'
import type { VacancyFormReturn } from '@/shared/hooks/useVacancyForm'
import { Button } from '@/shared/ui/Button'
import { Row } from '@/shared/ui/Row'
import { Select } from '@/shared/ui/Select'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { TextInput } from '@/shared/ui/TextInput'
import { Controller } from 'react-hook-form'

interface VacancyFormProps {
	form: VacancyFormReturn
}

export function VacancyForm({ form }: VacancyFormProps) {
	return (
		<form className={styles.vacancy_form}>
			<fieldset className={styles.fields}>
				<Controller
					control={form.control}
					name='title'
					render={({ field }) => (
						<TextInput label='Название вакансии' placeholder='Введите название вакансии' {...field} />
					)}
				/>

				<Controller
					control={form.control}
					name='description'
					render={({ field }) => (
						<Textarea label='Описание вакансии' placeholder='Введите описание вакансии' {...field} />
					)}
				/>

				<Controller
					control={form.control}
					name='experience'
					render={({ field }) => <TextInput label='Опыт работы' placeholder='Введите опыт работы' {...field} />}
				/>

				<Controller
					control={form.control}
					name='workType'
					render={({ field }) => <Select label='Тип работы' placeholder='Выберите тип работы' {...field} />}
				/>

				<Controller
					control={form.control}
					name='workType'
					render={({ field }) => <Select label='Тип работы' placeholder='Выберите тип работы' {...field} />}
				/>

				<Row>
					<Controller
						control={form.control}
						name='salary'
						render={({ field: { value, onChange, ...field } }) => (
							<TextInput
								label='Средний доход'
								inputMode='numeric'
								value={value[0]}
								onChange={(event) => {
									onChange([parseInt(event.target.value, 10), value[1]])
								}}
								{...field}
							/>
						)}
					/>
					<Controller
						control={form.control}
						name='salary'
						render={({ field: { value, onChange, ...field } }) => (
							<TextInput
								label='Максимальный доход'
								inputMode='numeric'
								value={value[1]}
								onChange={(event) => {
									onChange([value[0], parseInt(event.target.value, 10)])
								}}
								{...field}
							/>
						)}
					/>
				</Row>
			</fieldset>

			<Button type='submit'>Создать вакансию</Button>
		</form>
	)
}
