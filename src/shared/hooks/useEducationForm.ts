import { zodResolver } from '@hookform/resolvers/zod'
import type { UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const educationSchema = z.object({
	university: z.string().min(1),
	specialization: z.string().min(1),
	date: z.date(),
})
type VacancySchema = z.infer<typeof educationSchema>
export type EducationFormReturn = UseFormReturn<VacancySchema>

export const useEducationForm = () => {
	const form = useForm<VacancySchema>({
		defaultValues: {
			company: '',
			jobTitle: '',
			description: '',
			date:[],
		},
		resolver: zodResolver(educationSchema),
	})

	return form
}
