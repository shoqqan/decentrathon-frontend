import { AccountRoles } from '../constants/accountRoles'
import { useQuery } from 'react-query'

export const useAccount = () => {
	const accountQuery = useQuery({
		queryKey: ['account'],
		queryFn: async () => ({
			id: 1,
			role: AccountRoles.USER,
		}),
	})

	return { accountQuery }
}
