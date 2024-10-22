import type { AccountRoles } from '../constants/accountRoles'
import { useEffect, useState } from 'react'

export const useSelectRole = () => {
	const [role, setRole] = useState<AccountRoles | null>(null)

	const handleSelectRole = (newRole: AccountRoles) => {
		setRole(newRole)
		localStorage.setItem('role', JSON.stringify(newRole))
	}

	useEffect(() => {
		const roleJson = localStorage.getItem('role')
		if (!roleJson) {
			return
		}

		const newRole = JSON.parse(roleJson) as AccountRoles
		setRole(newRole)
	}, [])

	return { role, handleSelectRole }
}
