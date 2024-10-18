import type { TelegramWebApps } from 'telegram-webapps-types'

export function getTelegramWebApp() {
	return window?.Telegram?.WebApp as TelegramWebApps.WebApp & Record<string, any>
}
