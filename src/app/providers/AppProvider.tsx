import WelcomePage from '@/pages/WelcomePage/WelcomePage'
import type { AccountRoles } from '@/shared/constants/accountRoles'
import { getTelegramInitData } from '@/shared/helpers/getTelegramInitData'
import { getTelegramWebApp } from '@/shared/helpers/getTelegramWebApp'
import { useSelectRole } from '@/shared/hooks/useSelectRole'
import { createContext, type PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'

const RoleContext = createContext<{
	role: AccountRoles | null
	geolocation: GeolocationPosition | null
	onSelect: (role: AccountRoles) => void
} | null>(null)

export function AppProvider({ children }: PropsWithChildren) {
	const { role, handleSelectRole } = useSelectRole()
	const [geolocation, setGeolocation] = useState<GeolocationPosition | null>(null)

	const handleInitApp = async () => {
		try {
			const telegramWebApp = getTelegramWebApp()
			if (!telegramWebApp) {
				return
			}

			telegramWebApp.ready()
			telegramWebApp.expand()
			telegramWebApp.disableVerticalSwipes()
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position)
				setGeolocation(position)
			})

			const initData = getTelegramInitData(telegramWebApp.initData)
			console.log(initData)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleInitApp()
	}, [])

	const roleValue = useMemo(
		() => ({
			role,
			geolocation,
			onSelect: handleSelectRole,
		}),
		[geolocation, role],
	)

	return (
		<RoleContext.Provider value={roleValue}>{!roleValue.role ? <WelcomePage /> : <>{children}</>}</RoleContext.Provider>
	)
}

export const useRole = () => {
	const context = useContext(RoleContext)
	if (context === null) {
		throw new Error('useRole must be used within a RoleProvider')
	}

	return context
}
