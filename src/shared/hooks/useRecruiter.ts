import { useQuery } from 'react-query'

export const useRecruiter = () => {
	const recruiterQuery = useQuery({
		queryKey: ['recruiter'],
		queryFn: async () => ({
			workType: 'full-time',
		}),
	})

	return { recruiterQuery }
}
