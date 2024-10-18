import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

const TelegramContext = createContext<null>(null)

export function TelegramProvider({ children }: PropsWithChildren) {
	const [data, setData] = useState<null>(null)

	const handleTelegramInit = async () => {
		try {
			const telegram = window.Telegram
			console.log(telegram)
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
