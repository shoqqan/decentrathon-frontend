import type { EmploymentTypes } from '../constants/employmentTypes'
import type { WorkTypes } from '../constants/workTypes'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useVacancies = () => {
	const [skip, setSkip] = useState(0)
	const [limit, setLimit] = useState(10)
	const [q, setQ] = useState('')
	const [workType, setWorkType] = useState<WorkTypes | null>(null)
	const [employmentType, setEmploymentType] = useState<EmploymentTypes | null>(null)

	const vacanciesQuery = useQuery({
		queryKey: ['vacancies'],
		queryFn: async () => ({
			jobs: [
				{
					title: 'Разработка',
					details: 'Разработка системы управления контентом для сайта https://decentrathon.org',
					work_type: 'full-time',
					salary_from: 100,
					salary_to: 200,
					employment_type: 'full-time',
					experience: '3 месяца',
				},
			],
		}),
		// const res = await jobsApi.getList({
		// 	skip,
		// 	limit,
		// 	q,
		// 	work_type: workType,
		// 	employment_type: employmentType,
		// })
		// return res
	})

	return { vacanciesQuery, setSkip, setLimit, setQ, setWorkType, setEmploymentType }
}
