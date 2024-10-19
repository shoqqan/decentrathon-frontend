import { zodResolver } from '@hookform/resolvers/zod'
import type { UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const experienceSchema = z.object({
	company: z.string().min(1),
	jobTitle: z.string().min(1),
	description: z.string().min(1),
	date: z.array(z.date()).min(1),
})
type VacancySchema = z.infer<typeof experienceSchema>
export type ExperienceFormReturn = UseFormReturn<VacancySchema>

export const useExperienceForm = () => {
	const form = useForm<VacancySchema>({
		defaultValues: {
			company: '',
			jobTitle: '',
			description: '',
			date:[],
		},
		resolver: zodResolver(experienceSchema),
	})

	return form
}
