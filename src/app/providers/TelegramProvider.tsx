import { getTelegramInitData } from '@/shared/helpers/getTelegramInitData'
import { getTelegramWebApp } from '@/shared/helpers/getTelegramWebApp'
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import type { TelegramWebApps } from 'telegram-webapps-types'

const TelegramContext = createContext<TelegramWebApps.WebAppInitData | null>(null)

export function TelegramProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState<TelegramWebApps.WebAppInitData | null>(null)

	const handleTelegramInit = async () => {
		try {
			const telegramWebApp = getTelegramWebApp()
			if (!telegramWebApp) {
				return
			}

			const initData = getTelegramInitData(telegramWebApp.initData)
			setData(initData)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleTelegramInit()
	}, [])

	return <TelegramContext.Provider value={data}>{children}</TelegramContext.Provider>
}

export const useTelegram = () => {
	const context = useContext(TelegramContext)
	if (context === null) {
		throw new Error('useTelegram must be used within a TelegramProvider')
	}

	return context
}
