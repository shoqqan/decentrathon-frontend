import { useQuery } from 'react-query'

export const useUser = () => {
	const userQuery = useQuery({
		queryKey: ['user'],
		queryFn: async () => ({
			workType: 'full-time',
		}),
	})

	return { userQuery }
}
