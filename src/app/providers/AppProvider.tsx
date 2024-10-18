import { getTelegramInitData } from '@/shared/helpers/getTelegramInitData'
import { getTelegramWebApp } from '@/shared/helpers/getTelegramWebApp'
import { type PropsWithChildren, useEffect } from 'react'

export function AppProvider({ children }: PropsWithChildren) {
	const handleInitApp = async () => {
		try {
			const telegramWebApp = getTelegramWebApp()
			if (!telegramWebApp) {
				return
			}

			telegramWebApp.ready()
			telegramWebApp.expand()
			telegramWebApp.disableVerticalSwipes()

			const initData = getTelegramInitData(telegramWebApp.initData)
			console.log(initData)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleInitApp()
	}, [])

	return <>{children}</>
}
