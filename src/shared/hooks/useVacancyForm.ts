import { zodResolver } from '@hookform/resolvers/zod'
import type { UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const vacancySchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	experience: z.string().min(1),
	workType: z.string().min(1),
	salary: z.array(z.number()).min(1),
})
type VacancySchema = z.infer<typeof vacancySchema>
export type VacancyFormReturn = UseFormReturn<VacancySchema>

export const useVacancyForm = () => {
	const form = useForm<VacancySchema>({
		defaultValues: {
			title: '',
			description: '',
			experience: '',
			workType: '',
			salary: [0, 0],
		},
		resolver: zodResolver(vacancySchema),
	})

	return form
}
